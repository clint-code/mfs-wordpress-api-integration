import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit():void{

    this.setMaxHeight();

  }

  selectSolution(event){

    let selectedSolution = event.target;
    console.log(selectedSolution);
    $(selectedSolution).toggleClass('activeSolution');

  }

  setMaxHeight(){

    let maxHeight = 0;

    console.log(maxHeight);

     $(".singleSolution").each(function(index,value){

       if(maxHeight < $(this).outerHeight()){

         maxHeight = $(this).outerHeight() - 20;

       }

       console.log(index + ": " + $(this).height());

     });

     $(".singleSolution").height(maxHeight);
}

}
