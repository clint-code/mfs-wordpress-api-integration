
import { Component, OnInit } from '@angular/core';
import  $  from 'jquery';


import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';

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



	constructor(
	  private contentService:ContentManagementService,
	  private titleService: Title,
	  private metaService:Meta,
	) { }

  ngOnInit(): void {

	  this.titleService.setTitle("MFS Technologies - Home");

	  $(window).resize(this.setMaxHeight);

	  this.getHomePageContent();

	  // Get the navigation items for Our Solutions
	  this.getNavigationItems();

	  // Get all our solution Grid Icons
	  this.getOurSolutionsSummary();


  }

  ngAfterViewInit():void{

	  setTimeout(() => {

          //this.setMaxHeight();
		  this.siteImages = Preloader.getImages();

      }, 5000);


  }

  ngAfterViewChecked():void{


  }

  handleSiteLoaded(){

	  this.setMaxHeight();
	  
  }

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

			this.sliderHightLight = response[0]?.acf?.slider_highlight;

		  }

	  });

  }

  getNavigationItems(){

	  this.contentService.getAllSolutionNavigationItems().subscribe(navigationObject => {

		  if(navigationObject !== null || navigationObject !== ""){

			  this.navigationItems = navigationObject;
			  this.sliderHightLight = navigationObject;
			  // Set local storage

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
