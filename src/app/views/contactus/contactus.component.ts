import { Component, OnInit } from '@angular/core';

import $ from 'jquery';

import { Title, Meta } from '@angular/platform-browser';

import {Contact} from '../../models/Contact.model';

import {ContentManagementService} from '../../services/content-management.service';

import { gsap } from 'gsap';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css'],
   providers:[
 	  ContentManagementService
   ]
})

export class ContactusComponent implements OnInit {

	contactObject:Contact = new Contact();
	serviceOfInterest:any = [];
	loadingServices:boolean = false;
	submittingForm:boolean = false;

	submissionMessage:string = "";

	showModal: boolean = false;
	modalTitle:string = "";
	modalDescription:string = "";
	modalType:string = "info";

  constructor(
	private contentService:ContentManagementService,
	private titleService: Title,
	private metaService:Meta,
  ) { }

  ngOnInit(): void {

	  this.titleService.setTitle("MFS Technologies - Contact Us");

	  this.metaService.updateTag(
		  { name: 'description', content: 'Contact Us'
		  }
	  );

	  this.contactObject.subject = "User Enquiry MFS Website";

	  this.loadingServices = true;

	  this.getServices();

	  $(window).resize(this.setMaxHeight);

  }

  ngAfterViewInit(): void {

		setTimeout(() => {

		  this.setMaxHeight();

	  }, 2000);

	  this.fadeInEffect();

	}

  getServices(){

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
			  this.showModal = true;
			  this.modalTitle = "Network Error";
			  this.modalDescription = "There seems to be a problem with your network. Ensure that your connection is stable and refresh your browser.";
			  this.modalType = "info";

		  }


	  },error =>{

		  // Show error messages
		  this.loadingServices = false;
		  this.showModal = true;
		  this.modalTitle = "Network Error";
		  this.modalDescription = "There seems to be a problem with your network. Ensure that your connection is stable and refresh your browser.";
		  this.modalType = "info";

		  this.showModal = true;
		  this.modalTitle = "Network Error";
		  this.modalDescription = "There seems to be a problem with your network. Ensure your connection is stable and refresh your browser.";
		  this.modalType = "info";

	  });


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

  selectSolution(event) {

    let selectedSolution = event.target;

    $(selectedSolution).toggleClass('activeSolution');

	if(event.target.type === "checkbox" && event.target.checked === true){

		this.contactObject.serviceOfInterest.push(event.target.dataset.value);

	}else if(event.target.type === "checkbox" && event.target.checked === false){


		this.contactObject.serviceOfInterest = this.contactObject.serviceOfInterest.filter(v => v !== event.target.dataset.value);


	}


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

  fadeInEffect(){

	gsap.from(".contentDescription, .formSection", {

        opacity: 0, 
        y: 80, 
        duration: 3
		
	});
    
  }

}
