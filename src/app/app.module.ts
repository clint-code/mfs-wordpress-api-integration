import { BrowserModule,Title } from '@angular/platform-browser';
import {
  CommonModule
} from '@angular/common';

import { NgModule } from '@angular/core';
import { BrowserAnimationsModule  } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';

//View Imports
import { HomeComponent } from './views/home/home.component';
import { ContactusComponent } from './views/contactus/contactus.component';
import { OurstoryComponent } from './views/ourstory/ourstory.component';
import { SinglesolutionComponent } from './views/singlesolution/singlesolution.component';
import { OurbrandComponent } from './views/ourbrand/ourbrand.component';

//MODULE
import { SharedModule } from './shared/shared.module';
import { HeaderAltComponent } from './components/header-alt/header-alt.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactusComponent,
    OurstoryComponent,
    SinglesolutionComponent,
    OurbrandComponent
  ],
  imports: [
    BrowserModule,
	CommonModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
	HttpClientModule
  ],
  providers: [
	  Title,
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
