import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing'

import { HeroesModule } from './heroes/heroes.module'

import { AppComponent }  from './app.component';
import { PageNotFoundComponent } from './component/404/404'

@NgModule({
  imports:      [ 
    BrowserModule,
    HeroesModule,
    AppRoutingModule
  ],
  declarations: [ 
    AppComponent,
    PageNotFoundComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
