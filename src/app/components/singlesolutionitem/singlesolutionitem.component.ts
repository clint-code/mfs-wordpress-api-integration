import { Component, Input, OnInit } from '@angular/core';
import { $ } from 'jquery';

@Component({
  selector: 'app-singlesolutionitem',
  templateUrl: './singlesolutionitem.component.html',
  styleUrls: ['./singlesolutionitem.component.css']
})
export class SinglesolutionitemComponent implements OnInit {

  @Input() image: string;
  @Input() title: string;
  @Input() description: string;
  @Input() link: string;

  

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.setMaxHeight();
  }

  setMaxHeight(){
    
    let maxHeight = 0;

    $('.solutions').each(function(){ 

      $('.singleSolution', this).each(function (){

        if($(this).height() > maxHeight){

          maxHeight = $(this).height();

        }

        $('.singleSolution', this).height(maxHeight);

      })

    });

  }

}
