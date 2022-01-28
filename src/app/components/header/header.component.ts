import { Component, OnInit } from '@angular/core';

import {ContentManagementService} from '../../services/content-management.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

	navigationItems:any = [];

	constructor(
	  private contentService:ContentManagementService,
	) { }

	  ngOnInit(): void {

		  // Get Items from local storage and load menu

		  // Get the navigation items for Our Solutions
		  this.getNavigationItems();

	  }

  getNavigationItems(){

	  this.contentService.getAllSolutionNavigationItems().subscribe(response => {

		  if(response !== null || response !== ""){

			  this.navigationItems = response;
			  console.log( this.navigationItems);
			  // Set local storage storage here

		  }
	  });

  }

}
