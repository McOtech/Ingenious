import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GoodsComponent } from './goods/goods.component';
import { HomeComponent } from './home/home.component';
import { SingleServiceComponent } from './single-service/single-service.component';


const routes: Routes = [
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'services',
    component: GoodsComponent
  },
  {
    path: 'services/:name',
    component: SingleServiceComponent
  },
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
