import { Component, Input, OnInit } from '@angular/core';

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

}
