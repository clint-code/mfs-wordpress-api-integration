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
