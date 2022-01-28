import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ContentManagementService {

  constructor(
      private http:HttpClient
  ){

  }

  submitContactDetails(formData){

      return this.http.post(`${environment.contactEndPoint}`,formData);

  }

  getAllSolutionNavigationItems(){

	  return this.http.get(`${environment.contentRoot}our_solutions?per_page=100&_fields=acf.service_icon,title.rendered,slug`);

  }

	// Get content by page slug
  getContentByPageSlug(slug){

	  return this.http.get(`${environment.contentRoot}pages?slug=${slug}`);

  }

  getAllSolutionsSummaries(){

	   return this.http.get(`${environment.contentRoot}our_solutions?per_page=100&_fields=acf.feature_image,title.rendered,slug,acf.excerpt`);

  }

  getSingleSolution(solutionSlug){

	  return this.http.get(`${environment.contentRoot}our_solutions?slug=${solutionSlug}`);

  }

  getOurStories(){

	   return this.http.get(`${environment.contentRoot}our_stories?per_page=100&_fields=acf.background_image,title.rendered,slug,acf.story_content,acf.timeline_tag`);

  }


}
