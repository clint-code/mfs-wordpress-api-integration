import { Component, OnInit } from '@angular/core';

import { Title, Meta } from '@angular/platform-browser';

import {ContentManagementService} from '../../services/content-management.service';

import Utils from '../../utils/utils';

import Preloader from '../../utils/preloader';

import $ from 'jquery';

import { gsap } from 'gsap';

@Component({
  selector: 'app-ourstory',
  templateUrl: './ourstory.component.html',
  styleUrls: ['./ourstory.component.css'],
  providers:[
	  ContentManagementService
  ]
})

export class OurstoryComponent implements OnInit {

	storyContent:any =[];
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

	  this.loadingView = true;

	  this.titleService.setTitle("MFS Technologies - Our Story");

	  this.metaService.updateTag(
		  { name: 'keywords', content: 'MFS Technologies, Insure Me, My Mobi, Brand Story'
		  }
	  );

	  this.metaService.updateTag(
		  { name: 'description', content: 'The origin story of MFS Technologies'
		  }
	  );

	  this.contentService.getOurStories().subscribe(response => {

		  if(response !== "" || response !== null){

			  this.storyContent = response;

			  setTimeout(() => {

          		this.activateFirstTab();
				this.fadeImageRight();

		    }, 2000);

			  this.loadingView = false;

		  }else{

			  this.loadingView = false;
        this.showModal = true;
			  this.modalTitle = "Network Error";
			  this.modalDescription = "There seems to be a problem with your network. Ensure that your connection is stable and refresh your browser.";
			  this.modalType = "info";

		  }

	  },error => {

		  this.loadingView = false;
      this.showModal = true;
      this.modalTitle = "Network Error";
      this.modalDescription = "There seems to be a problem with your network. Ensure that your connection is stable and refresh your browser.";
      this.modalType = "info";

	  });

		$('html, body').animate ({
		scrollTop: $(".tabContent").offset({
			top: 0
		})
		}, 500);

	}

  activateFirstTab(){

    $(".sidebarContainer .sidebar nav ul li:first").addClass('active');
    
  }

  ngAfterViewInit():void{

	  setTimeout(() => {

		  this.siteImages = Preloader.getImages();

		  $(".contentDescription .tabContent").hide();

		  $(".contentDescription .tabContent:first").show();

		  this.fadeUpContent();

		  $(".tabContent,.sidebarBackground img").hide();

		  $(".tabContent:first,.sidebarBackground img:first").show();

		  this.fadeImageRight();

      }, 3000);

  }

  activateTab(event){

    //activating the clicked timeline link
    let currentTimelineLink = event.target;

    $(".active").removeClass('active');
    $(currentTimelineLink).addClass('active');

    if($(currentTimelineLink).hasClass("timelineLink")){

      $(currentTimelineLink).addClass('active');

    }

    //Toggling the background images
    let currentImage = event.target.dataset.background;

    $(".backgroundImage").fadeOut(() => {
		gsap.from('.backgroundImage',{
			opacity: 0
		})
	});

    $('.' + currentImage).fadeIn(() => {
		gsap.fromTo('.' + currentImage, 
			{opacity: 0, x: 50},
			{opacity: 1, x: 0, duration: 2}
		);
	});

    //Scrolling through the content
    let targetDiv = event.target.dataset.target;

    $(".tabContent").fadeOut();
    $('#' + targetDiv).fadeIn();

    gsap.from('#' + targetDiv, {
			opacity: 0, 
			y: 100, 
			duration: 2
		});

	}

	fadeUpContent(){

		gsap.from('.contentDescription', {
			opacity: 0, 
			y: 100, 
			duration: 2
		  });
	
	}

	fadeImageRight(){

		gsap.fromTo('.sidebarBackground .backgroundImage', 
		{opacity: 0, x: 50},
		{opacity: 1, x: 0, duration: 2}
	);

	}
	

}
