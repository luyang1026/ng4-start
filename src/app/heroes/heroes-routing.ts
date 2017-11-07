import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { HeroListComponent } from '../component/hero/heroList.component'
const route: Routes = [
  {path:'heroes', component: HeroListComponent}
]
@NgModule({
  imports:[
    RouterModule.forChild(route)
  ],
})
export class heroesRoutingModule{}