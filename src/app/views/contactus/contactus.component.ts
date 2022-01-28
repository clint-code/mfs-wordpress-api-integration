import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

import {Contact} from '../../models/Contact.model';

import {ContentManagementService} from '../../services/content-management.service';

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

  constructor(
	private contentService:ContentManagementService
  ) { }

  ngOnInit(): void {

	  this.contactObject.subject = "User Enquiry MFS Website";

	  this.getServices();

  }

  getServices(){

	  this.contentService.getAllSolutionNavigationItems().subscribe(response => {

		  if(response !== "" || response !== null){

			  this.serviceOfInterest = response;

		  }


	  });


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

	console.log(event.target.type);

    $(selectedSolution).toggleClass('activeSolution');

	if(event.target.type === "checkbox"){

		this.contactObject.serviceOfInterest.push(event.target.dataset.value);

	}


  }

}
