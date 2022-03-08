import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { Title, Meta } from '@angular/platform-browser';

import {Contact} from '../../models/Contact.model';

import Utils from '../../utils/utils';

import Preloader from '../../utils/preloader';

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

	submissionMessage:string = "";

	keywords:string;
	metaDescription:string;

	siteImages:any = [];

  constructor(
	  private route: ActivatedRoute,
	  private router: Router,
	  private contentService:ContentManagementService,
	  private titleService: Title,
	  private metaService:Meta,
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

	  this.getServices();

	  // this.router.routeReuseStrategy.shouldReuseRoute = () => false;

	  this.contentService.getSingleSolution(this.solutionSlug).subscribe(response => {

		  if(response !== null || response !== ""){

			  this.pageDetails = response[0];

			  this.titleService.setTitle("MFS Technologies Solution - " + this.pageDetails?.title?.rendered);

			  this.contactObject.subject = "Contact from - " + this.pageDetails?.title?.rendered;

			  this.contactObject.serviceOfInterest.push(this.pageDetails?.title?.rendered);

			  this.loadingView = false;
			  // Set local storage

			  this.keywords = this.pageDetails?.acf?.keywords;
		  	  this.metaDescription = this.pageDetails?.acf?.excerpt.replace("<p>","").replace("</p>","");

			  this.metaService.updateTag(
				  { name: 'keywords', content: this.keywords
				  }
			  );


			  this.metaService.updateTag(
				  { name: 'description', content: this.metaDescription
				  }
			  );

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

	setTimeout(() => {

		this.siteImages = Preloader.getImages();

	}, 4000);

  }

  getServices(){

	  this.contentService.getAllSolutionNavigationItems().subscribe(response => {

		  this.contentService.getAllSolutionNavigationItems().subscribe(response => {

			  if(response !== "" || response !== null){

				  this.loadingServices = false;
				  this.serviceOfInterest = response;

				  setTimeout(() => {

			        this.setMaxHeight();

				}, 2000);

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


 }

  onSubmit(contactDetails){

	  this.submittingForm = true;

	  this.contentService.submitContactDetails(this.contactObject).subscribe(response =>{

		  if(response !== "" || response !== null){

			  this.submittingForm = false;

			  this.submissionMessage = "Email sent succesfully";

		  }else{

			  this.submittingForm = false;

			  this.submissionMessage = "Error submitting message";

		  }

	  },error => {

		  this.submittingForm = false;

		  this.submissionMessage = "Error submitting message";

	  });

  }

  setMaxHeight() {

    let maxHeight = 0;

    $(".singleSolution").each(function (index, value) {

      if (maxHeight < $(this).height()) {

        maxHeight = $(this).height();

      }

    });

    $(".singleSolution").height(maxHeight);

  }

  selectSolution(event) {

    let selectedSolution = event.target;
    $(selectedSolution).toggleClass('activeSolution');

	if(event.target.type === "checkbox" && event.target.checked === true){

		this.contactObject.serviceOfInterest.push(event.target.dataset.value);

	}else if(event.target.type === "checkbox" && event.target.checked === false){


		this.contactObject.serviceOfInterest = this.contactObject.serviceOfInterest.filter(v => v !== event.target.dataset.value);

	}

 }
 



}
