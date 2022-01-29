import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
@Component({
  selector: 'app-singlesolution',
  templateUrl: './singlesolution.component.html',
  styleUrls: ['./singlesolution.component.css']
})
export class SinglesolutionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  ngAfterViewInit():void{

    this.setMaxHeight();

  }

  selectSolution(event){

    let selectedSolution = event.target;
    $(selectedSolution).toggleClass('activeSolution');

  }


  setMaxHeight(){

       let maxHeight = 0;

       console.log(maxHeight);

        $(".singleSolution").each(function(index,value){

          if(maxHeight < $(this).innerHeight()){

            maxHeight = $(this).innerHeight();

          }

          console.log(index + ": " + $(this).height());

        });

        $(".singleSolution").height(maxHeight);
  }


}
