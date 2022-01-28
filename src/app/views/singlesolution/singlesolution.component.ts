import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import {Contact} from '../../models/Contact.model';

import {ContentManagementService} from '../../services/content-management.service';

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
	serviceOfInterest:[];

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

	  // this.router.routeReuseStrategy.shouldReuseRoute = () => false;

	  this.contentService.getSingleSolution(this.solutionSlug).subscribe(response => {

		  if(response !== null || response !== ""){

			  this.pageDetails = response[0];
			  console.log(this.pageDetails);
			  // Set local storage

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

	  this.contentService.submitContactDetails(contactDetails).subscribe(response =>{

	  });

  }

}
