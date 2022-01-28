import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactusComponent } from './views/contactus/contactus.component';
import { HomeComponent } from './views/home/home.component';
import { OurstoryComponent } from './views/ourstory/ourstory.component';
import { SinglesolutionComponent } from './views/singlesolution/singlesolution.component';

import { OurbrandComponent } from './views/ourbrand/ourbrand.component';

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
        path: 'ourbrand',
        component: OurbrandComponent,
    },
    {
        path:'contactus',
        component: ContactusComponent,
    },
    {
        path: 'oursolutions',
		children: [
	      {
	        path: ':slug',
	        component: SinglesolutionComponent,
	      },
	  ]
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
