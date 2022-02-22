import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { DemoComponent } from './demo/demo.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [  
  {
  path: 'searchbar',
  component: SearchbarComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'demo',
    component: DemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


//TODO: interactivity for the search bar and single page loading of the developer contact card