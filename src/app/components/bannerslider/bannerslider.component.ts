import { Component, OnInit, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

declare var $:any;

@Component({
  selector: 'app-bannerslider',
  templateUrl: './bannerslider.component.html',
  styleUrls: ['./bannerslider.component.css'],
  animations:[
    trigger('show', [

      state('hidden', style({
        opacity: 0,

      })),
      state('visible', style({
        opacity: 1,
      })),
      transition('hidden => visible', [
        animate('1s')
      ])
    ]),
  ]
})

export class BannersliderComponent implements OnInit {

  @Input() introText: string;
  @Input() bannerHeaderText:string;
  @Input() description: string;
  @Input() bannerLink: string;
  @Input() type: string = '';
  @Input() sliderImages: any = [];
  @Input() sliderHighlights:any = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit():void{

    if(this.sliderImages.length > 0){

        $( '#mainSlider' ).sliderPro({
            width: '100%',
            autoHeight:true,
            arrows: true,
            buttons: false,
            waitForLayers: true,
            shuffle: true,
            fade:false,
            autoplayDelay:5000,
            fadeDuration:5000,
            thumbnailPointer: false,
            autoplay: true,
            autoScaleLayers: false,
        });

    }



}


}
