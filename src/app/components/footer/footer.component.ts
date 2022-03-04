import { Component, OnInit } from '@angular/core';
import {ContentManagementService} from '../../services/content-management.service';

import $ from 'jquery';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

	navigationItemsArray:any = [];

  constructor(
	  private contentService:ContentManagementService,
  ) { }

  ngOnInit(): void {

	  this.getNavigationItems();

  }

  getNavigationItems(){

	  this.contentService.getAllSolutionNavigationItems().subscribe(response => {

		  if(response !== null || response !== ""){

			  this.navigationItemsArray = response;

			  // Set local storage storage here

		  }
	  });

  }

  scrollUpSolutionsPage(){
    $('html, body').stop().animate({
        scrollTop: $(".bannerSection").offset().top - 80
    }, 400);
}

  scrollUpContactUs(){

    $('html, body').stop().animate ({
      scrollTop: $(".contactUs").offset({
         top: 80
       })
    }, 500);

  }


}
