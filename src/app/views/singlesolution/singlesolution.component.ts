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

  selectSolution(event){

    let selectedSolution = event.target;
    $(selectedSolution).toggleClass('activeSolution');

  }

}
