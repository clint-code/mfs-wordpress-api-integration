import { Component, OnInit,Input } from '@angular/core';

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

  ngOnInit(): void {
  }

}
