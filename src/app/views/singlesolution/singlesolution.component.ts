import {
  Component,
  OnInit
} from '@angular/core';
import $ from 'jquery';
@Component({
  selector: 'app-singlesolution',
  templateUrl: './singlesolution.component.html',
  styleUrls: ['./singlesolution.component.css']
})
export class SinglesolutionComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {

    $(window).resize(this.setMaxHeight);

  }


  ngAfterViewInit(): void {

    setTimeout(() => {

      this.setMaxHeight();

    }, 800);

  }

  selectSolution(event) {

    let selectedSolution = event.target;
    $(selectedSolution).toggleClass('activeSolution');

  }

  setMaxHeight() {

    let maxHeight = 0;

    $(".singleSolution").each(function (index, value) {

      if (maxHeight < $(this).height()) {

        maxHeight = $(this).height();

        console.log(maxHeight);

      }

    });

    $(".singleSolution").height(maxHeight);

  }


}
