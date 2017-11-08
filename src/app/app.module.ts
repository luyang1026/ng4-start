import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http'
import { AppRoutingModule } from './app-routing'

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './service/hero/in-memory-data.service';

import { HeroesModule } from './heroes/heroes.module'

import { AppComponent }  from './app.component';
import { PageNotFoundComponent } from './component/404/404'

@NgModule({
  imports:      [ 
    BrowserModule,
    HeroesModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [ 
    AppComponent,
    PageNotFoundComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
