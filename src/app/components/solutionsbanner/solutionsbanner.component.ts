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

  }

  ngOnInit(): void {
    
    this.solutionSlug = this.route.snapshot.paramMap.get('slug');

    this.contentService.getSingleSolution(this.solutionSlug).subscribe(response => {

      if(response !== null || response !== ""){

          this.animateBannerDelay();

      }
      
    });
    
  }

  animateBannerDelay(){

      gsap.to(".bannerContent", {
        opacity: 1,
        y: 0, 
        duration: 2.75,
        delay: 2.75,
      }

    );

  }



}
