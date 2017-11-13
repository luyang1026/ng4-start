import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { HeroListComponent } from '../component/hero/heroList.component'
import { HeroDetailComponent } from '../component/hero/heroDetail.component'
const route: Routes = [
  {path:'heroes', component: HeroListComponent},
  {path:'hero/:id',component: HeroDetailComponent}
]
@NgModule({
  imports:[
    RouterModule.forChild(route)
  ],
})
export class heroesRoutingModule{}