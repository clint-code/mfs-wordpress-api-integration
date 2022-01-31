import { Component, OnInit } from '@angular/core';
import { Router,Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(

    private router:Router,
  ) {}

  ngOnInit(): void {

    $(window).resize(this.closeMobileMenu);

    this.router.events.subscribe(val => {

      if(val instanceof NavigationEnd && $(".menuToggle").hasClass("open")){

           this.toggleMenu();

      }

  });

  }

  //opening mobile menu
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

}
