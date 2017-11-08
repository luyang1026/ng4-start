import { NgModule } from '@angular/core'
import { heroesRoutingModule } from './heroes-routing'
import { CommonModule }   from '@angular/common';
import { FormsModule } from '@angular/forms'

import { HeroListComponent } from '../component/hero/heroList.component'
import { HeroDetailComponent } from '../component/hero/heroDetail.component'
import { HeroSevice } from '../service/hero/hero.service'
@NgModule({
 imports:[
   CommonModule,
   FormsModule,
   heroesRoutingModule
 ],
 declarations:[
   HeroListComponent,
   HeroDetailComponent
 ],
 providers:[
   HeroSevice
 ]
})
export class HeroesModule{}