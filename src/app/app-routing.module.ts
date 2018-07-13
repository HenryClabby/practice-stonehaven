import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurPracticesComponent } from './our-practices/our-practices.component';
import { TestScreenComponent } from './test-screen/test-screen.component';

const routes: Routes = [
  {path: 'app-home', component: HomeComponent },
  {path: '', component: HomeComponent },
  {path: 'app-aboutUs', component: AboutUsComponent },
  {path: 'app-ourPractices', component: OurPracticesComponent },
  {path: 'app-contact', component: ContactComponent },
  {path: 'app-testScreen', component: TestScreenComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
