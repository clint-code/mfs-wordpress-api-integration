import { Component, OnInit, Input} from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';


@Component({
  selector: 'app-animatepreloader',
  templateUrl: './animatepreloader.component.html',
  styleUrls: ['./animatepreloader.component.css']
})
export class AnimatepreloaderComponent implements OnInit {

  @Input() preloaderPosition: string = "center-center";
  @Input() preloaderSize: number = 50;
  @Input() blur: number = 0;
  @Input() spinnerType: string = 'ball-spin'; 
  @Input() loadingDirection: string = 'left-to-right';
  @Input() hasProgressBar: boolean = true;
  @Input() preloaderColor: string = '#ffc402';
  @Input() overlayColor: string = 'rgba(40,40,40,0)';


  constructor(
    private ngxLoader: NgxUiLoaderService
  ) { }

  ngOnInit(): void {
      
      // start foreground spinner of the loader "loader-01" with 'default' taskId
      this.ngxLoader.startLoader('loader-01'); 

      // stop foreground spinner of the loader "loader-01" with 'default' taskId
      // setTimeout(() => {
      //     this.ngxLoader.stop(); 
      // }, 30000);

  }

}
