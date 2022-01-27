import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import {ContentManagementService} from '../../services/content-management.service';

@Component({
  selector: 'app-singlesolution',
  templateUrl: './singlesolution.component.html',
  styleUrls: ['./singlesolution.component.css'],
  providers:[
	  ContentManagementService
  ]
})
export class SinglesolutionComponent implements OnInit {

	solutionSlug:string = "";
    pageDetails:any = [];

  constructor(
	  private route: ActivatedRoute,
	  private contentService:ContentManagementService,
  ) { }

  ngOnInit(): void {

	  this.solutionSlug = this.route.snapshot.paramMap.get('slug');

	  this.contentService.getSingleSolution(this.solutionSlug).subscribe(response => {

		  if(response !== null || response !== ""){

			  this.pageDetails = response[0];
			  console.log(this.pageDetails);
			  // Set local storage

		  }
	  });

  }

  selectService(event){

    console.log(event);

  }

}
