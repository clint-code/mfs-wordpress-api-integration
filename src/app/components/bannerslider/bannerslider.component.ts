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
	@Input() type: string = 'banner';
	@Input() sliderImages: any = [];
	@Input() sliderHighlights:any = [];

	constructor() {


	}

	ngOnInit(): void {

	}

	ngOnDestroy():void{

		$('.owl-carousel').owlCarousel('destroy');

	}

	ngAfterViewInit():void{

		if(this.sliderImages.length > 0 && this.type == "slider"){

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

		if(this.type == "banner" && this.sliderHighlights.length > 0){

			setTimeout(() => {

				this.createServicesCarousel();

			}, 3000);

		}



	}

	createServicesCarousel(){


		$(".owl-carousel").owlCarousel({
			items:6,
			itemsDesktop : [1199,6],
		    itemsDesktopSmall : [980,4],
		    itemsTablet: [768,2],
		    itemsTabletSmall: false,
		    itemsMobile : [479,1],
			navigation : false,
			autoPlay:true,
			pagination:true,
    		navigationText : ["",""],
			afterInit:this.equalizeCarouselItems,
		});

	}

	equalizeCarouselItems(){

         let maxHeight = 0;

          $(".singleCta").each(function(index,value){

            if(maxHeight < $(this).height()){

              maxHeight = $(this).height();

            }

          });

          $(".singleCta").height(maxHeight);

      }


}
