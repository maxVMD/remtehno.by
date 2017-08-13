import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }   from '@angular/http';
import {Routes, RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';


import { AppComponent }  from './app.component';
import { HomeComponent }   from './home.component';
import { AboutComponent }   from './about.component';
import { ServicesComponent }   from './services.component';
import { BlogComponent }   from './blog.component';
import { BlogDetailsComponent }   from './blog.details.component';
import { ContactComponent }   from './contacts.component ';
import { NotFoundComponent }   from './not-found.component';


import { HttpDataService }   from './data.service';

const appRoutes: Routes =[
    { path: '', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: 'services', component: ServicesComponent},
    { path: 'blog', component: BlogComponent },
    { path: 'blog-details/:id', component: BlogDetailsComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', component: NotFoundComponent }
    
];

 
@NgModule({
    imports:      [ BrowserModule, FormsModule, HttpModule,  RouterModule.forRoot(appRoutes)],
    declarations: [ AppComponent, HomeComponent, ServicesComponent, AboutComponent, BlogComponent, BlogDetailsComponent, ContactComponent,  NotFoundComponent],
    bootstrap:    [ AppComponent ],
    providers:	  [HttpDataService , {provide: LocationStrategy, useClass: HashLocationStrategy}]
})
export class AppModule { }