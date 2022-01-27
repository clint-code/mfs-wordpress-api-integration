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

  constructor(
	  private contentService:ContentManagementService,
  ) { }

  ngOnInit(): void {

	  this.contentService.getOurStories().subscribe(response => {

		  if(response !== "" || response !== null){

			  this.storyContent = response;

			  console.log(this.storyContent);

		  }

	  });

  }

  openTimeLineTab(event){

    let currentTimelineLink = event.target;

    $(".active").removeClass('active');
    $(currentTimelineLink).addClass('active');

    if($(currentTimelineLink).hasClass("timelineLink")){

      $(".timelineLink .timeline").removeClass('hideTimeline');
      $(currentTimelineLink).addClass('active');
      $(currentTimelineLink).find('timeline').addClass('active');

    } else {

      $(".timelineLink .timeline").addClass('hideTimeline');

    }

    //Changing background images

    let currentImage = event.target.dataset.background;
    $(".backgroundImage").hide();
    $('.' + currentImage).show();


  }

  scrollPage(event){

    let targetDiv = event.target.dataset.target;
    console.log(targetDiv)

    $('.contentDescription').animate({
      scrollTop: $("#" + targetDiv).offset().top
    }, 400);
  }

}
