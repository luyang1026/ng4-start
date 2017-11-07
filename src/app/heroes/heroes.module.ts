import { NgModule } from '@angular/core'
import { heroesRoutingModule } from './heroes-routing'
import { CommonModule }   from '@angular/common';

import { HeroListComponent } from '../component/hero/heroList.component'

@NgModule({
 imports:[
   CommonModule,
   heroesRoutingModule
 ],
 declarations:[
   HeroListComponent
 ]
})
export class HeroesModule{}