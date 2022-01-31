import { Component, OnInit } from '@angular/core';

import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';

import {ContentManagementService} from '../../services/content-management.service';

@Component({
  selector: 'app-ourbrand',
  templateUrl: './ourbrand.component.html',
  styleUrls: ['./ourbrand.component.css'],
  providers:[
	  ContentManagementService
  ]
})
export class OurbrandComponent implements OnInit {

	brandContent:any;
	loadingView:boolean = false;

  constructor(
	  private contentService:ContentManagementService
  ) { }

  ngOnInit(): void {

	  this.loadingView = true;
	  this.getBrandPageContent();

  }

  getBrandPageContent(){

	  this.contentService.getContentByPageSlug("our-brands").subscribe(response => {

		  if(response !== "" || response !== null){

			this.brandContent = response[0];
			this.loadingView = false;

		}else{

			this.loadingView = false;

		}

	},error => {

		this.loadingView = false;
		
	});

  }

}
