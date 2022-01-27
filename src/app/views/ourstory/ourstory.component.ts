import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-ourstory',
  templateUrl: './ourstory.component.html',
  styleUrls: ['./ourstory.component.css']
})
export class OurstoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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

}
