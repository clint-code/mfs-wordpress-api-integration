import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import gsap from 'gsap';

import {ContentManagementService} from '../../services/content-management.service';

@Component({
  selector: 'app-solutionsbanner',
  templateUrl: './solutionsbanner.component.html',
  styleUrls: ['./solutionsbanner.component.css'],
  providers:[
	  ContentManagementService
  ]
})

export class SolutionsbannerComponent implements OnInit {

	@Input() image: string;
  @Input() title: string;
  @Input() excerpt: string;

  currentTitle:string = "";
  currentExcerpt: string = "";
  currentBanner: string = "";
  solutionSlug:string = "";

  constructor(
    private route: ActivatedRoute,
    private contentService:ContentManagementService
  ) { 

    //   this.route.paramMap.subscribe(params => {
    //     this.ngOnInit();
    // });

  }

  ngOnInit(): void {

    this.solutionSlug = this.route.snapshot.paramMap.get('slug');

    this.contentService.getSingleSolution(this.solutionSlug).subscribe(response => {

      if(response !== null || response !== ""){

        this.currentTitle = response[0].title.rendered;

        this.currentExcerpt = response[0].acf.excerpt;

        this.currentBanner = response[0].acf.banner_image;

        console.log(this.currentTitle);

        console.log(this.title);

        console.log(this.currentExcerpt);

        console.log(this.currentBanner);

      }
      
      this.compareInputs();

    });

  }

  // ngAfterViewInit(): void {

  //   if(this.title !== this.currentTitle && this.excerpt !== this.currentExcerpt && this.image !== this.currentBanner){
      
  //     this.animateBannerText();

  //   }

  // }

  compareInputs(){

   if(this.title == this.currentTitle || this.excerpt == this.currentExcerpt || this.image == this.currentBanner){
      
       this.animateBannerText();

    }

  }
  
  animateBannerText(){

   console.log("Hello there");

		gsap.fromTo(".bannerContent", 
        {opacity: 0, y: 200},
        {opacity: 1, y:0, duration: 1.5}
    );

	}


}
