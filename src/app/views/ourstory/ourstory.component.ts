import { Component, OnInit } from '@angular/core';

import {ContentManagementService} from '../../services/content-management.service';

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

  constructor(
	  private contentService:ContentManagementService,
  ) { }

  ngOnInit(): void {

    if($(window).width() < 1199){

      $(window).resize(this.setMinHeight);

    }

	  this.loadingView = true;

	  $(".contentDescription div").hide();

	  this.contentService.getOurStories().subscribe(response => {

		  if(response !== "" || response !== null){

			  this.storyContent = response;

			  setTimeout(() => {

		      $(".tabContent").hide();
				  $(".tabContent:first").show();

		      }, 2000);

			  this.loadingView = false;



		  }else{

			  this.loadingView = false;

		  }

	  },error => {

		  this.loadingView = false;
		  
	  });

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
    console.log(targetDiv);

    $(".tabContent").hide();
    $('#' + targetDiv).show();

  }

  scrollPage(event){

    let targetDiv = event.target.dataset.target;
    console.log(targetDiv);

    $(".tabContent").hide();
    $('#' + targetDiv).show();

  }

  setMinHeight(){

    let minHeight = 0;

     $(".contentDescription").each(function(index,value){

       if(minHeight < $(this).height()){

         minHeight = $(this).height() + 300;

         console.log(minHeight);

       }

     });

     $(".contentDescription").css('min-height',(minHeight));

  }

}
