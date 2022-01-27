import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { BannersliderComponent } from '../components/bannerslider/bannerslider.component';
import { SolutionsbannerComponent } from '../components/solutionsbanner/solutionsbanner.component';
import { SinglesolutionitemComponent } from '../components/singlesolutionitem/singlesolutionitem.component';
import { HowitworksComponent } from '../components/howitworks/howitworks.component';
import { ResultssectionComponent } from '../components/resultssection/resultssection.component';
import { SinglesolutionsintroComponent } from '../components/singlesolutionsintro/singlesolutionsintro.component';
import { SocialNavComponent } from "../components/social-nav/social-nav.component";
import { ServicesprovidedComponent } from "../components/servicesprovided/servicesprovided.component";
import { BrandlinksComponent } from '../components/brandlinks/brandlinks.component';

//ICONS
import { FaIconLibrary } from "@fortawesome/angular-fontawesome";
import {
    faTwitter,
    faFacebookF,
    faLinkedinIn,
  } from '@fortawesome/free-brands-svg-icons';
  import {
    faPhoneVolume,
    faHandHoldingUsd,
    faUsersCog,
    faAngleDown,
    faAddressCard,
    faChartLine,
    faCreditCard,
    faComments,
    faWallet,
    faUniversity,
    faUserShield,
    faArrowCircleRight,
    faMobileAlt,
    faStore,
    faArrowAltCircleRight
  } from '@fortawesome/free-solid-svg-icons';
  
  import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
  import { MatCheckboxModule } from '@angular/material/checkbox';

  @NgModule({
      declarations: [
        HeaderComponent,
        FooterComponent,
        BannersliderComponent,
        SolutionsbannerComponent,
        SinglesolutionitemComponent,
        HowitworksComponent,
        SinglesolutionsintroComponent,
        ResultssectionComponent,
        SocialNavComponent,
        ServicesprovidedComponent,
        BrandlinksComponent
      ],

      imports: [
        RouterModule,
        CommonModule,
        FormsModule,
        FontAwesomeModule,
        MatCheckboxModule
      ],

      exports: [
        HeaderComponent,
        FooterComponent,
        CommonModule,
        RouterModule,
        FormsModule,
        FontAwesomeModule,
        SocialNavComponent,
        BannersliderComponent,
        SinglesolutionitemComponent,
        SolutionsbannerComponent,
        ServicesprovidedComponent,
        BrandlinksComponent,
        MatCheckboxModule
      ],
  })

  export class SharedModule{

    constructor(library: FaIconLibrary) {
        library.addIcons(
          faTwitter,
          faFacebookF,
          faLinkedinIn,
          faPhoneVolume,
          faAngleDown,
          faHandHoldingUsd,
          faUsersCog,
          faAddressCard,
          faChartLine,
          faCreditCard,
          faComments,
          faWallet,
          faUniversity,
          faUserShield,
          faArrowCircleRight,
          faMobileAlt,
          faStore,
          faArrowAltCircleRight
        );
      }

  }