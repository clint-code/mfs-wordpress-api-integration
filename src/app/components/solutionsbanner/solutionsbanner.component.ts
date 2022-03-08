import { Component, OnInit, Input } from '@angular/core';

import gsap from 'gsap';

@Component({
  selector: 'app-solutionsbanner',
  templateUrl: './solutionsbanner.component.html',
  styleUrls: ['./solutionsbanner.component.css']
})

export class SolutionsbannerComponent implements OnInit {

	@Input() image: string;
  @Input() title: string;
  @Input() excerpt: string;

  constructor() { }

  ngOnInit(): void{


  }

  ngAfterViewInit():void{

     this.animateBannerText();

  }

  animateBannerText(){

		gsap.fromTo(".bannerContent", 
        {opacity: 0, y: 200},
        {opacity: 1, y:0, duration: 1.5}
    );

	}


}
