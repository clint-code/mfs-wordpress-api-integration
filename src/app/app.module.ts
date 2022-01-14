import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { ContactusComponent } from './views/contactus/contactus.component';
import { OurstoryComponent } from './views/ourstory/ourstory.component';
import { SinglesolutionComponent } from './views/singlesolution/singlesolution.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannersliderComponent } from './components/bannerslider/bannerslider.component';
import { SolutionsbannerComponent } from './components/solutionsbanner/solutionsbanner.component';
import { SinglesolutionitemComponent } from './components/singlesolutionitem/singlesolutionitem.component';
import { HowitworksComponent } from './components/howitworks/howitworks.component';
import { ResultssectionComponent } from './components/resultssection/resultssection.component';
import { SinglesolutionsintroComponent } from './components/singlesolutionsintro/singlesolutionsintro.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactusComponent,
    OurstoryComponent,
    SinglesolutionComponent,
    HeaderComponent,
    FooterComponent,
    BannersliderComponent,
    SolutionsbannerComponent,
    SinglesolutionitemComponent,
    HowitworksComponent,
    ResultssectionComponent,
    SinglesolutionsintroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
