import { Component, OnInit } from '@angular/core';
import $ from 'jquery';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  sliderImages:any =  [];

  constructor() { }

  ngOnInit(): void {

    this.sliderImages = [

        {
          introText: "We are in the business of",
          bannerHeaderText: "Making Connections & Solving Problems",
          description: "Achieve game-changing agility and future-proof your business with our fully digital lending solutions.",
          bannerLink: "#",
          type : "slider",
          slideImage: "./assets/img/banners/homepage-slider.jpg"
        },

        {
          introText: "We are in the business of",
          bannerHeaderText: "Making Solving Problems & Connections",
          description: "Achieve game-changing agility and future-proof your business with our fully digital lending solutions.",
          bannerLink: "#",
          type : "slider",
          slideImage: "./assets/img/banners/homepage-slider-2.jpg"
        },

        {
          introText: "We are in the business of",
          bannerHeaderText: "Making Connections & Solving Problems",
          description: "Achieve game-changing agility and future-proof your business with our fully digital lending solutions.",
          bannerLink: "#",
          type : "slider",
          slideImage: "./assets/img/banners/homepage-slider.jpg"
        }

    ];

  }

  ngAfterViewInit():void{

    this.setMaxHeight();

  }

  setMaxHeight(){
  
       let maxHeight = 0;

       console.log(maxHeight);
  
        $(".singleSolution").each(function(index,value){

          if(maxHeight < $(this).outerHeight()){

            maxHeight = $(this).outerHeight() + 240;

          }

          console.log(index + ": " + $(this).height());

        }); 

        $(".singleSolution").height(maxHeight);
    }


}
