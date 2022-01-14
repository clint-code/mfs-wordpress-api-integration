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

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { FaIconLibrary } from "@fortawesome/angular-fontawesome";
import {
    faTwitterSquare,
    faFacebookSquare,
    faLinkedin
  } from '@fortawesome/free-brands-svg-icons';
  import {
    faMale,
    faArrowAltCircleRight,
    faArrowAltCircleLeft,
    faFemale,
    faPlus,
    faCar,
    faEnvelope,
    faUserShield,
    faChild,
    faWallet,
    faMinusCircle,
    faPlusCircle,
    faUpload,
    faFileUpload,
    faEdit,
    faClock,
    faChevronCircleDown,
    faPills,
    faShieldAlt,
    faArrowCircleRight,
    faArrowCircleLeft,
    faPhoneVolume,
    faHeadset,
    faBars,
    faTimes,
    faFilePdf,
    faDownload,
    faTimesCircle,
    faHome,
    faQuestion,
    faPhone,
    faArrowCircleDown,
    faArrowDown,
    faHeart,
    faShareAlt,
    faInfo,
    faCalendarAlt,
    faMapMarkerAlt,
    faCheckCircle,
    faExclamationCircle,
    faMobile,
    faMobileAlt,
    faExchangeAlt,
    faCaretDown,
    faAddressCard,
  } from '@fortawesome/free-solid-svg-icons';

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
        RouterModule,
        FormsModule,
        FontAwesomeModule
      ],
  })

  export class SharedModule{
    constructor(library: FaIconLibrary) {
        library.addIcons(
          faMale,
          faCar,
          faWallet,
          faArrowAltCircleRight,
          faFemale,
          faPlus,
          faUserShield,
          faChild,
          faMinusCircle,
          faPlusCircle,
          faUpload,
          faClock,
          faFileUpload,
          faEdit,
          faChevronCircleDown,
          faPills,
          faTwitterSquare,
          faFacebookSquare,
          faShieldAlt,
          faArrowCircleRight,
          faPhoneVolume,
          faHeadset,
          faBars,
          faTimes,
          faEnvelope,
          faFilePdf,
          faDownload,
          faTimesCircle,
          faHome,
          faQuestion,
          faPhone,
          faArrowCircleDown,
          faArrowDown,
          faHeart,
          faShareAlt,
          faInfo,
          faArrowAltCircleLeft,
          faArrowCircleLeft,
          faCalendarAlt,
          faMapMarkerAlt,
          faCheckCircle,
          faExclamationCircle,
          faMobile,
          faMobileAlt,
          faExchangeAlt,
          faCaretDown,
          faAddressCard
        );
      }
  }