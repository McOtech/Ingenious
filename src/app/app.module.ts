import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SingleServiceComponent } from './single-service/single-service.component';
import { GoodsComponent } from './goods/goods.component';
import { ServiceSidebarComponent } from './service-sidebar/service-sidebar.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

// const jQuery = window['$'];
// const toastr: Toastr = window['toastr'];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SingleServiceComponent,
    GoodsComponent,
    ServiceSidebarComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
  	// {
    //   provide: JQ_TOKEN,
    //   useValue: jQuery
    // },
    // {
    //   provide: TOASTR_TOKEN,
    //   useValue: toastr
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
