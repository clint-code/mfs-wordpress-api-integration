import { Component, OnInit } from '@angular/core';

import {ContentManagementService} from '../../services/content-management.service';

@Component({
  selector: 'app-header-alt',
  templateUrl: './header-alt.component.html',
  styleUrls: ['./header-alt.component.css']
})
export class HeaderAltComponent implements OnInit {

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
			  console.log( this.navigationItemsArray);
			  // Set local storage storage here

		  }
	  });

  }

}
