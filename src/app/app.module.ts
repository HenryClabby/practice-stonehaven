import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurPracticesComponent } from './our-practices/our-practices.component';
import { ContactComponent } from './contact/contact.component';
import { TestScreenComponent } from './test-screen/test-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    OurPracticesComponent,
    ContactComponent,
    TestScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
