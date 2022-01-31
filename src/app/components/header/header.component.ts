import { Component, OnInit } from '@angular/core';
import { Router,Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import $ from 'jquery';

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
	  private router:Router,
	) { }

	  ngOnInit(): void {

		  // Get Items from local storage and load menu

		  // Get the navigation items for Our Solutions
		  this.getNavigationItems();

		  $(window).resize(this.closeMobileMenu);

	      this.router.events.subscribe(val => {

	        if(val instanceof NavigationEnd && $(".menuToggle").hasClass("open")){

	             this.toggleMenu();

	        }

	    });

	  }

	  toggleMenu() {

	    $(".headerWrapper .menuToggle").toggleClass("open");

	    if ($(".menuToggle").hasClass("open")) {

	      $(".mobileMenu").show().stop().animate({

	          left: 0

	        }, 1000);

	    } else {

	      $(".mobileMenu").stop().animate({

	        left: '-100%'

	      }, 1000, function () {

	        $(".mobileMenu").hide();

	      });

	    }

	  }

	  //opening mobile sub menu
	  openSubMenu(){

	    $(".mobileMenu .megaMenu").toggleClass("openSubMenu");

	  }

	  //closing the mobile menu
	  closeMobileMenu(){

	    if ($(window).width() > 1199){

	      $(".mobileMenu").hide();

	    }
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
