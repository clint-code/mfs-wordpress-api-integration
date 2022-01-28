import { Component, OnInit } from '@angular/core';
import { $ } from 'jquery';

import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';

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
	introductionContent:any;
	secondaryContent:any;



	constructor(
	  private contentService:ContentManagementService,
	  private titleService: Title,
	  private metaService:Meta,
	) { }

  ngOnInit(): void {

	  this.getHomePageContent();

	  // Get the navigation items for Our Solutions
	  this.getNavigationItems();

	  // Get all our solution Grid Icons
	  this.getOurSolutionsSummary();

	  this.sliderImages = [

          {
            introText: "We are in the business of",
            bannerHeaderText: "Making Connections & Solving Problems",
            description: "Achieve game-changing agility and future-proof your business with our fully digital lending solutions.",
            bannerLink: "#",
            type : "slider",
            slideImage: "./assets/img/banners/homepage-slider.jpg"
          },

          {
            introText: "We are in the business of",
            bannerHeaderText: "Making Solving Problems & Connections",
            description: "Achieve game-changing agility and future-proof your business with our fully digital lending solutions.",
            bannerLink: "#",
            type : "slider",
            slideImage: "./assets/img/banners/homepage-slider-2.jpg"
          },

          {
            introText: "We are in the business of",
            bannerHeaderText: "Making Connections & Solving Problems",
            description: "Achieve game-changing agility and future-proof your business with our fully digital lending solutions.",
            bannerLink: "#",
            type : "slider",
            slideImage: "./assets/img/banners/homepage-slider.jpg"
          }

      ];
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

		  }

	  });

  }

  getNavigationItems(){

	  this.contentService.getAllSolutionNavigationItems().subscribe(navigationObject => {

		  if(navigationObject !== null || navigationObject !== ""){

			  this.navigationItems = navigationObject;
			  // Set local storage

		  }
	  });

  }

  getOurSolutionsSummary(){

	  this.contentService.getAllSolutionsSummaries().subscribe(solutionsObject => {

		  if(solutionsObject !== null || solutionsObject !== ""){

			  this.ourSolutions = solutionsObject;

		  }
	  });

  }

}
