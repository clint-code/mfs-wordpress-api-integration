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

  openTab(event){

    let currentLink = event.target;

    $(".active").removeClass('active');
    $(currentLink).addClass('active');

  }

  changeImage(event){

    let currentImage = event.target.dataset.background;

    $(".backgroundImage").hide();
    $('.' + currentImage).show();

    console.log(currentImage);
    
  }

  showTimeline(event){

    let currentTimeline = event.target.dataset.timeline;

    $(".timelineSidebar").show();
    
    console.log(currentTimeline);

  }

  hideTimeline(){
    
    $(".timelineSidebar").hide();
  }

  openTimeLineTab(event){

    let currentTimelineLink = event.target;
    
    $(".active").removeClass('active');
    $(currentTimelineLink).addClass('active');

    $("nav ul .timelineLink .active").remove('active');

  }

  scrollPage(event){

    let targetDiv = event.target.dataset.target;
    let contentDiv = $('.' + targetDiv);

    $('html, body').stop().animate({
      scrollTop: contentDiv.offset().top
    }, 400);
  }

}
