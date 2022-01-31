import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';


import $ from 'jquery';

@Component({
    selector: 'app-preloader',
    templateUrl: './preloader.component.html',
    styleUrls: ['./preloader.component.css']
})
export class PreloaderComponent implements OnInit {

    @Input() percentage:number;
    @Input() images:any;
    @Output() siteLoadedEvent = new EventEmitter<boolean>();

    siteImages:any;
    imagesLoaded:number;
    totalImages:number;
    percentageLoaded:number;
    loaderCar:string;

    constructor() { }

    ngOnInit(): void {

        this.imagesLoaded = 0;
        this.siteImages = this.images;
        this.totalImages = this.siteImages.length;

        //console.log(this.totalImages);

        this.loadImages(this.siteImages);
        this.loaderCar = this.randomiseCar();


    }

    randomiseCar(){

        const  carArray:any = [
            {src: 'e24.png'},
            {src: 'e60.png'},
            {src: 'e46.png'},
            {src: '911.png'},
            {src: 'f30.png'},
            {src: 'forester.png'},
            {src: 'gtr.png'},
            {src: 'lancer.png'},
            {src: 'wrx.png'},
            {src: 'ambulance.png'},
        ];

        const imageIndex = Math.floor(Math.random() * carArray.length);

        const selectedCar = carArray[imageIndex].src;

        return "./assets/_img/home/cars/"+selectedCar;

        //console.log(this.loaderCar);

    }

    loadImages(images) {

        for (let i = 0; i < this.totalImages; i++) {

            const image = new Image();

            image.addEventListener("load", (event) => {

              this. imageLoaded(event);

            },false);


            image.src = this.siteImages[i];


        }

    }

    handleFileComplete(event){

        //console.log(event);

    }

    imageLoaded(event){


        this.imagesLoaded++;

        //console.log(this.imagesLoaded);

        this.percentageLoaded = Math.round((this.imagesLoaded/this.totalImages)*100);

        $(".loaderContent").stop().animate({
            right:100-this.percentageLoaded+"%"
        });

        if(this.imagesLoaded == this.totalImages){

            this.loadComplete();

        }




    }

    loadComplete(){

        $(".preLoader").fadeOut();

    }



}
