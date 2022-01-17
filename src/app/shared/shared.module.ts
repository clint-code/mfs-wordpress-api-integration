import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { BannersliderComponent } from '../components/bannerslider/bannerslider.component';
import { SolutionsbannerComponent } from '../components/solutionsbanner/solutionsbanner.component';
import { SinglesolutionitemComponent } from '../components/singlesolutionitem/singlesolutionitem.component';
import { HowitworksComponent } from '../components/howitworks/howitworks.component';
import { ResultssectionComponent } from '../components/resultssection/resultssection.component';
import { SinglesolutionsintroComponent } from '../components/singlesolutionsintro/singlesolutionsintro.component';

import { FaIconLibrary } from "@fortawesome/angular-fontawesome";
import {
    faTwitter,
    faFacebookF,
    faLinkedinIn,
  } from '@fortawesome/free-brands-svg-icons';

  import {
    faPhoneVolume,
    faArrowAltCircleLeft,
    faEdit,
    faChevronCircleDown,
    faArrowCircleLeft,
    faCaretDown
  } from '@fortawesome/free-solid-svg-icons';

  import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

  @NgModule({
      declarations: [
        HeaderComponent,
        FooterComponent,
        BannersliderComponent,
        SolutionsbannerComponent,
        SinglesolutionitemComponent,
        HowitworksComponent,
        SinglesolutionsintroComponent,
        ResultssectionComponent
      ],

      imports: [
        RouterModule,
        FormsModule,
        FontAwesomeModule
      ],

      exports: [
        HeaderComponent,
        RouterModule,
        FormsModule,
        FontAwesomeModule
      ],
  })

  export class SharedModule{

    constructor(library: FaIconLibrary) {
        library.addIcons(
          faTwitter,
          faFacebookF,
          faLinkedinIn,
          faPhoneVolume,
        );
      }

  }