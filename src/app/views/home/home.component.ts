import { Component, OnInit } from '@angular/core';

import  $  from 'jquery';

import { Title, Meta } from '@angular/platform-browser';

import Utils from '../../utils/utils';
import Preloader from '../../utils/preloader';

import { ContentManagementService } from '../../services/content-management.service';

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
	threshold:number = 1;

	//showModal: boolean = false;
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

  animateSingleSolution(){

    document.querySelectorAll('.singleItem').forEach((box) => {

      const scrollBox = gsap.timeline({
        scrollTrigger: {
          trigger: box,
          //start: 'top top',
         // end: 'top center',
          toggleActions: 'restart none none none',
        },
      });

      scrollBox.from(box, { 
		  y: 150, 
		  opacity: 0,
		  duration: 2.5 
		});

    });
    
  }

 animateStatistics(){

	let items = document.querySelectorAll(".statNumber");

	const scrollBox = gsap.timeline({

		scrollTrigger: {
			trigger: items,
			toggleActions: 'restart none none none',
		  },

	});

	scrollBox.from(items, {
	  textContent: 1,
	  duration: 2,
	  ease: "power1.in",
	  increment: 1,
	  opacity: 0,
	  stagger: 1.0,

	});


}

  handleHover(event){

	let card = event.target;

	const { clientX, clientY, currentTarget } = event;
	const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;
	
	console.log("Client width is: " + clientWidth);
	console.log("Client height is: " + clientHeight);

	console.log("Client X is: " + clientX);
	console.log("Client Y is: " + clientY);
  
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
			start: 'top center',
			toggleActions: 'restart none none none',
		  },

	});

	scrollBox.fromTo('.cntRight', 
		{ opacity: 0, x: -100},
		{ opacity: 1, x: 0, duration: 6.5, ease: "power3"}
	);

  }

  fadeInRight(){

	const scrollBox = gsap.timeline({

		scrollTrigger: {
			trigger: '.contentSection',
			start: 'top bottom',
			toggleActions: 'restart none none none',
		  },

	});

	scrollBox.fromTo('.cntLeft', 
		{ opacity: 0, y: 100},
		{ opacity: 1, y: 0, duration: 6.5, ease: "power3"}
	);

  }

  animatePartners(){
	  
	const scrollBox = gsap.timeline({

		scrollTrigger: {
			trigger: '.partnerLogos',
			start: 'top top',
			toggleActions: 'restart none none none',
		  },

	});

	scrollBox.from('.partnerLogos', {
		opacity: 0, 
        y: 100, 
        duration: 3
	});
  }

}

