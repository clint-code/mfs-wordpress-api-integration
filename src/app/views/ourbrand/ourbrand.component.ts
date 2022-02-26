import { Component, OnInit } from '@angular/core';

import { Title, Meta } from '@angular/platform-browser';

import {ContentManagementService} from '../../services/content-management.service';

import Preloader from '../../utils/preloader';

import { gsap } from 'gsap';

@Component({
  selector: 'app-ourbrand',
  templateUrl: './ourbrand.component.html',
  styleUrls: ['./ourbrand.component.css'],
  providers:[
	  ContentManagementService
  ]
})
export class OurbrandComponent implements OnInit {

	brandContent:any;
	loadingView:boolean = false;

	siteImages:any = [];

  constructor(
	  private contentService:ContentManagementService,
	  private titleService: Title,
	  private metaService:Meta,
  ) { }

  ngOnInit(): void {

	  this.titleService.setTitle("MFS Technologies - Our Brands");

	  this.metaService.updateTag(
		  { name: 'keywords', content: 'MFS Technologies, Insure Me, My Mobi, Brand Story'
		  }
	  );

	  this.metaService.updateTag(
		  { name: 'description', content: 'The brands MFS technologies owns'
		  }
	  );

	  this.loadingView = true;
	  this.getBrandPageContent();

  }

  ngAfterViewInit():void{

	  setTimeout(() => {
		  
		  this.siteImages = Preloader.getImages();

		  this.fadeInEffect();

      }, 3000);

	  


  }

  getBrandPageContent(){

	  this.contentService.getContentByPageSlug("our-brands").subscribe(response => {

		  if(response !== "" || response !== null){

			this.brandContent = response[0];
			this.loadingView = false;

		}else{

			this.loadingView = false;

		}

	},error => {

		this.loadingView = false;

	});

  }

  fadeInEffect(){

    gsap.from(".contentDescription", {
  
          opacity: 0, 
          y: 80, 
          duration: 2
      
    });
      
    }

}
