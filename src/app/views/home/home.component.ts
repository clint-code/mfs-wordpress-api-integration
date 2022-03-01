import { Component, OnInit } from '@angular/core';

import  $  from 'jquery';

import { Title, Meta } from '@angular/platform-browser';

import Utils from '../../utils/utils';
import Preloader from '../../utils/preloader';

import {ContentManagementService} from '../../services/content-management.service';

import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

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
	threshold:number = 15;


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

	gsap.registerPlugin(ScrollTrigger);

	  setTimeout(() => {

		  this.siteImages = Preloader.getImages();

		  this.animateSingleSolution();

		  this.animateStatistics();

		  this.fadeInLeft();

		  this.fadeInRight();
		
		  this.animatePartners();

      }, 5000);

	  
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

    document.querySelectorAll('.singleSolution').forEach((box) => {

      const scrollBox = gsap.timeline({
        scrollTrigger: {
          trigger: box,
          start: 'top bottom',
          //end: 'top bottom',
          toggleActions: 'play none none reverse',
        },
      });

      scrollBox.from(box, { y: 80, opacity: 0, duration: 3 });

    });
    
    
  }

 animateStatistics(){

	let items = document.querySelectorAll(".statNumber");

	const scrollBox = gsap.timeline({

		scrollTrigger: {
			trigger: items,
			start: 'top bottom',
			//end: 'top bottom',
			toggleActions: 'play none none reverse',
		  },

	});

	scrollBox.from(items, {
	  textContent: 0,
	  duration: 2,
	  ease: "power1.in",
	  snap: { textContent: 1 },
	  opacity: 0,

	  stagger: {
		each: 1.0,
  	}

});

}

  handleHover(event){

	let card = event.target;

	const { clientX, clientY, currentTarget } = event;
	const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;
	
	console.log(currentTarget);
  
	const horizontal = (clientX - offsetLeft) / clientWidth;
	const vertical = (clientY - offsetTop) / clientHeight;

	const rotateX = (this.threshold / 2 - horizontal * this.threshold).toFixed(2);
  	const rotateY = (vertical * this.threshold - this.threshold / 2).toFixed(2);

	console.log(rotateX);
	console.log(rotateY);

	card.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
	
  }

  resetStyles(event){

	let card = event.target;

	card.style.transform = `perspective(${event.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;

  }

  fadeInLeft(){

	const scrollBox = gsap.timeline({

		scrollTrigger: {
			trigger: '.contentSection',
			start: 'top bottom',
			//end: 'top bottom',
			toggleActions: 'play none none reverse',
		  },

	});

	scrollBox.from('.cntLeft', {
		opacity: 0, 
        x: -80, 
        duration: 3

	});

  }

  fadeInRight(){

	const scrollBox = gsap.timeline({

		scrollTrigger: {
			trigger: '.contentSection',
			start: 'top bottom',
			//end: 'top bottom',
			toggleActions: 'play none none reverse',
		  },

	});

	scrollBox.from('.cntRight', {
		opacity: 0, 
        y: 80, 
        duration: 3
	});

  }

  animatePartners(){
	  
	const scrollBox = gsap.timeline({

		scrollTrigger: {
			trigger: '.partnersSection',
			start: 'top bottom',
			//end: 'top bottom',
			toggleActions: 'play none none reverse',
		  },

	});

	scrollBox.from('.partnerLogos', {
		opacity: 0, 
        y: 80, 
        duration: 3
	});
  }

}

