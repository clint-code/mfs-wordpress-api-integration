import {
  Component,
  OnInit
} from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

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
    console.log(selectedSolution);
    $(selectedSolution).toggleClass('activeSolution');

  }

  setMaxHeight() {

    let maxHeight = 0;

    console.log(maxHeight);

    $(".singleSolution").each(function (index, value) {

      if (maxHeight < $(this).height()) {

        maxHeight = $(this).height();

      }

    });

    $(".singleSolution").height(maxHeight);

  }

}
