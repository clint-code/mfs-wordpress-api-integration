import { Component, OnInit } from '@angular/core';

import  $  from 'jquery';

import { Title, Meta } from '@angular/platform-browser';

import Utils from '../../utils/utils';
import Preloader from '../../utils/preloader';

import gsap from 'gsap';

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


	constructor(
	  private contentService:ContentManagementService,
	  private titleService: Title,
	  private metaService:Meta,
	) { }

  ngOnInit(): void {

	  this.titleService.setTitle("MFS Technologies - Home");

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

          //this.setMaxHeight();
		  this.siteImages = Preloader.getImages();

      }, 5000);


	  this.animateSingleSolution();

  }

  ngAfterViewChecked():void{


  }

  handleSiteLoaded(){

	  this.setMaxHeight();

	  this.imagesLoaded = true;

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

			//this.sliderHightLight = response[0]?.acf?.slider_highlight;

		  }

	  });

  }

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

  animateSingleSolution(){

	let tl = gsap.timeline({

		// yes, we can add it to an entire timeline!
		scrollTrigger: {
		  trigger: ".coreSolutionsSection",
		  pin: true,   // pin the trigger element while active
		  start: "top top", // when the top of the trigger hits the top of the viewport
		  end: "+=500", // end after scrolling 500px beyond the start
		  scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
		//   snap: {
		// 	snapTo: "labels", // snap to the closest label in the timeline
		// 	duration: {min: 0.2, max: 3}, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
		// 	delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
		// 	ease: "power1.inOut" // the ease of the snap animation ("power3" by default)
		//   }
		}
	  });

  }

  

}
