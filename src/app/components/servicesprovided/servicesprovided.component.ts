import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-servicesprovided',
  templateUrl: './servicesprovided.component.html',
  styleUrls: ['./servicesprovided.component.css']
})
export class ServicesprovidedComponent implements OnInit {

  @Input() serviceImage: string;
  @Input() serviceTitle: string;
  @Input() description: string;

  constructor() { }

  ngOnInit(): void {
  }

}
