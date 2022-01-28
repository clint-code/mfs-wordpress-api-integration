import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactusComponent } from './views/contactus/contactus.component';
import { HomeComponent } from './views/home/home.component';
import { OurstoryComponent } from './views/ourstory/ourstory.component';
import { SinglesolutionComponent } from './views/singlesolution/singlesolution.component';
import { OurbrandsComponent } from './views/ourbrands/ourbrands.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent ,
    },
    {
        path: 'ourstory',
        component: OurstoryComponent,
    },
    {
        path:'contactus',
        component: ContactusComponent,
    },
    {
        path: 'singlesolution',
        component: SinglesolutionComponent,
    },
    {
        path: 'ourbrands',
        component: OurbrandsComponent
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}