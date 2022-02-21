import { Component, OnInit } from '@angular/core';

import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';

import {ContentManagementService} from '../../services/content-management.service';

import Utils from '../../utils/utils';

import Preloader from '../../utils/preloader';

import $ from 'jquery';

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

	constructor(
	  private contentService:ContentManagementService,
	  private titleService: Title,
	  private metaService:Meta,
	) { }

	ngOnInit(): void {

	  this.loadingView = true;

	  $(".contentDescription div").hide();

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

		      $(".tabContent,.sidebarBackground img").hide();
			  $(".tabContent:first,.sidebarBackground img:first").show();
	    		this.activateFirstTab();

		      }, 2000);

			  this.loadingView = false;



		  }else{

			  this.loadingView = false;

		  }

	  },error => {

		  this.loadingView = false;

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

      }, 3000);

  }

  activateTab(event){

    //activating the clicked timeline link
    let currentTimelineLink = event.target;

    $(".active").removeClass('active');
    $(currentTimelineLink).addClass('active');

    if($(currentTimelineLink).hasClass("timelineLink")){

      $(".timelineLink .timeline").removeClass('hideTimeline');
      $(currentTimelineLink).addClass('active');

    }

    else {

      $(".timelineLink .timeline").addClass('hideTimeline');

    }

    //Toggling the background images
    let currentImage = event.target.dataset.background;
    $(".backgroundImage").hide();
    $('.' + currentImage).show();

    //Toggling the content
    let targetDiv = event.target.dataset.target;

    $(".tabContent").hide();
    $('#' + targetDiv).show();

  }

  scrollPage(event){

    let targetDiv = event.target.dataset.target;

    $(".tabContent").hide();
    $('#' + targetDiv).show();

  }


}
