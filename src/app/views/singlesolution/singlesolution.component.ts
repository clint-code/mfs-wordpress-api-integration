import { Component, OnInit } from '@angular/core';


import { ActivatedRoute, Router } from '@angular/router';

import {Contact} from '../../models/Contact.model';

import {ContentManagementService} from '../../services/content-management.service';

import $ from 'jquery';

@Component({
  selector: 'app-singlesolution',
  templateUrl: './singlesolution.component.html',
  styleUrls: ['./singlesolution.component.css'],
  providers:[
	  ContentManagementService
  ]
})
export class SinglesolutionComponent implements OnInit {

	solutionSlug:string = "";
    pageDetails:any = [];
	contactObject:Contact = new Contact();
	serviceOfInterest:any = [];

  constructor(
	  private route: ActivatedRoute,
	  private router: Router,
	  private contentService:ContentManagementService,
  ) {

	  this.route.paramMap.subscribe(params => {
            this.ngOnInit();
        });

  }

  ngOnInit(): void {

	  this.solutionSlug = this.route.snapshot.paramMap.get('slug');

	  this.contactObject.subject = "Contact from - " + this.solutionSlug;

	  this.contactObject.serviceOfInterest.push(this.solutionSlug);

	  this.getServices();

	  // this.router.routeReuseStrategy.shouldReuseRoute = () => false;

	  this.contentService.getSingleSolution(this.solutionSlug).subscribe(response => {

		  if(response !== null || response !== ""){

			  this.pageDetails = response[0];
			  console.log(this.pageDetails);
			  // Set local storage

		  }
	  });

  }

  getServices(){

	  this.contentService.getAllSolutionNavigationItems().subscribe(response => {

		  if(response !== "" || response !== null){

			  this.serviceOfInterest = response;

		  }


	  });


  }

  onServiceToggle(){

  }

  onChange(event, secondaryKey? : string) {


  	let name = event.target.name;
  	let value = event.target.value;

  	this.contactObject[name] = value;

	console.log(this.contactObject);

 }

  onSubmit(contactDetails){

	  this.contentService.submitContactDetails(this.contactObject).subscribe(response =>{

	  });

  }

  selectSolution(event){

    let selectedSolution = event.target;
    $(selectedSolution).toggleClass('activeSolution');

	if(event.target.type === "checkbox"){

		this.contactObject.serviceOfInterest.push(event.target.dataset.value);

	}

  }

}
