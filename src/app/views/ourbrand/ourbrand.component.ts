import { Component, OnInit } from '@angular/core';

import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';

import {ContentManagementService} from '../../services/content-management.service';

import Preloader from '../../utils/preloader';

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

	siteImages:any = [];

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

	  this.titleService.setTitle("MFS Technologies - Our Brands");

	  this.metaService.updateTag(
		  { name: 'keywords', content: 'MFS Technologies, Insure Me, My Mobi, Brand Story'
		  }
	  );

	  this.metaService.updateTag(
		  { name: 'description', content: 'The brands MFS technologies owns'
		  }
	  );

	  this.loadingView = true;
	  this.getBrandPageContent();

  }

  ngAfterViewInit():void{

	  setTimeout(() => {
		  
		  this.siteImages = Preloader.getImages();

      }, 3000);


  }

  getBrandPageContent(){

	  this.contentService.getContentByPageSlug("our-brands").subscribe(response => {

		  if(response !== "" || response !== null){

			this.brandContent = response[0];
			this.loadingView = false;

		}else{

			this.loadingView = false;

			this.showModal = true;
			this.modalTitle = "Network Error";
			this.modalDescription = "There seems to be a problem with your network. Ensure your connection is ok and refresh your browser.";
			this.modalType = "info";
			console.log("There's a network error");

		}

	},error => {

		this.loadingView = false;

		this.showModal = true;
		this.modalTitle = "Network Error";
		this.modalDescription = "There seems to be a problem with your network. Ensure your connection is ok and refresh your browser.";
		this.modalType = "info";
		console.log("There's a network error");

	});

  }

}
