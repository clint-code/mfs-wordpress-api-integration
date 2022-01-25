import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-brandlinks',
  templateUrl: './brandlinks.component.html',
  styleUrls: ['./brandlinks.component.css']
})
export class BrandlinksComponent implements OnInit {

  @Input() logo: string;
  @Input() link: string;
  @Input() linkDescription: string;


  constructor() { }

  ngOnInit(): void {
  }
  

}
