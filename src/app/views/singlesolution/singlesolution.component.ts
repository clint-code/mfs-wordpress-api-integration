
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
	loadingServices:boolean = false;
	submittingForm:boolean = false;
	loadingView : boolean = false;

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

	  $(window).resize(this.setMaxHeight);

	  this.loadingView = true;
	  this.loadingServices = true;

	  this.solutionSlug = this.route.snapshot.paramMap.get('slug');

	  this.contactObject.subject = "Contact from - " + this.solutionSlug;

	  this.contactObject.serviceOfInterest.push(this.solutionSlug);

	  this.getServices();

	  // this.router.routeReuseStrategy.shouldReuseRoute = () => false;

	  this.contentService.getSingleSolution(this.solutionSlug).subscribe(response => {

		  if(response !== null || response !== ""){

			  this.pageDetails = response[0];
			  console.log(this.pageDetails);

			  this.loadingView = false;
			  // Set local storage

		  }else{

			  this.loadingView = false;
		  }

	  },error => {

		  this.loadingView = false;

	  });


  }

  ngAfterViewInit(): void {

    setTimeout(() => {

      this.setMaxHeight();

    }, 800);

  }

  getServices(){

	  this.contentService.getAllSolutionNavigationItems().subscribe(response => {

		  this.contentService.getAllSolutionNavigationItems().subscribe(response => {

			  if(response !== "" || response !== null){

				  this.loadingServices = false;
				  this.serviceOfInterest = response;

			  }else{

				  // Show error messages
				  this.loadingServices = false;

			  }


		  },error =>{

			  // Show error messages
			  this.loadingServices = false;

		  });


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

	  this.submittingForm = true;

	  this.contentService.submitContactDetails(this.contactObject).subscribe(response =>{

		  if(response !== "" || response !== null){

			  this.submittingForm = false;

		  }else{

			  this.submittingForm = false;

		  }

	  },error => {

		  this.submittingForm = false;

	  });

  }

  setMaxHeight() {

    let maxHeight = 0;

    $(".singleSolution").each(function (index, value) {

      if (maxHeight < $(this).height()) {

        maxHeight = $(this).height();

        console.log(maxHeight);

      }

    });

    $(".singleSolution").height(maxHeight);

  }

  selectSolution(event) {

    let selectedSolution = event.target;
    $(selectedSolution).toggleClass('activeSolution');

	if(event.target.type === "checkbox"){

		this.contactObject.serviceOfInterest.push(event.target.dataset.value);

	}

}
}
