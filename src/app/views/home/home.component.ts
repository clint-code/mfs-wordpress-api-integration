import { Component, OnInit } from '@angular/core';
import  $  from 'jquery';

import { Title, Meta } from '@angular/platform-browser';

import Utils from '../../utils/utils';
import Preloader from '../../utils/preloader';

import {ContentManagementService} from '../../services/content-management.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[
	  ContentManagementService
  ]

})

export class HomeComponent implements OnInit {

	navigationItems:any = [];
	ourSolutions:any = [];
	sliderImage:any = [];
	partnersImages:any = [];
	statistics:any;
	sliderImages:any =  [];
	sliderHightLight:any = [];
	introductionContent:any;
	secondaryContent:any;

	siteImages:any = [];

	imagesLoaded:boolean = false;

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

	  this.titleService.setTitle("MFS Technologies - Empowering Consumers and Entrepreneurs Through Technology");

	  $(window).resize(this.setMaxHeight);

	  if(localStorage.getItem("navigationItems")) {

		 this.sliderHightLight = JSON.parse(localStorage.getItem("navigationItems"));

	 }

	  this.getHomePageContent();

	  // Get the navigation items for Our Solutions
	  this.getNavigationItems();

	  // Get all our solution Grid Icons
	  this.getOurSolutionsSummary();

  }

  ngAfterViewInit():void{

	  setTimeout(() => {

		  this.siteImages = Preloader.getImages();

      }, 5000);


  }

  ngAfterViewChecked():void{


  }

  handleSiteLoaded(){

	  this.setMaxHeight();

	  this.imagesLoaded = true;

  }

  //set the max height of the single solutions
  setMaxHeight(){

       let maxHeight = 0;

        $(".singleSolution").each(function(index,value){

          if(maxHeight < $(this).height()){

            maxHeight = $(this).height();

          }

        });

        $(".singleSolution").css({
			"min-height":maxHeight
		});

    }

  //Load home page content
  getHomePageContent(){

	  this.contentService.getContentByPageSlug("home").subscribe(response => {

		  if(response !== "" || response !== null){

			this.sliderImages = response[0]?.acf?.home_page_slider;

		  	this.partnersImages = response[0]?.acf?.partners;

		  	this.statistics = response[0]?.acf?.statistics;

			this.introductionContent = response[0]?.acf?.introduction_article;

			this.secondaryContent = response[0]?.acf?.secondary_article;

		  } else {

			this.showModal = true;
			this.modalTitle = "Network Error";
			this.modalDescription = "There seems to be a problem with your network. Ensure that your connection is stable and refresh your browser.";
			this.modalType = "info";

		  }	

	  }, error => {

			this.showModal = true;
			this.modalTitle = "Network Error";
			this.modalDescription = "There seems to be a problem with your network. Ensure that your connection is stable and refresh your browser.";
			this.modalType = "info";

	  });

  }

  //get the navigation items icons and slider icons 
  getNavigationItems(){

	  this.contentService.getAllSolutionNavigationItems().subscribe(navigationObject => {

		  if(navigationObject !== null || navigationObject !== ""){

			  this.navigationItems = navigationObject;

			  this.sliderHightLight = navigationObject;

		  }
	  });

  }

  getOurSolutionsSummary(){

	  this.contentService.getAllSolutionsSummaries().subscribe(solutionsObject => {

		  if(solutionsObject !== null || solutionsObject !== ""){

			  this.ourSolutions = solutionsObject;

			  setTimeout(() => {

		          //this.setMaxHeight();

		      }, 5000);

		  }
	  });

  }

}
