import { Component, OnInit,Input } from '@angular/core';

@Component({
    selector: 'app-processor',
    templateUrl: './processor.component.html',
    styleUrls: ['./processor.component.css']
})
export class ProcessorComponent implements OnInit {

    @Input() type:string;
    @Input() opaque:boolean;
    @Input() description:string = "Processing";
	@Input() processorHeight:string = "normal";

    constructor() {

    }

    ngOnInit(): void {

    }

}
