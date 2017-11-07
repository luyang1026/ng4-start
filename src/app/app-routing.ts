import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { PageNotFoundComponent } from './component/404/404'
const appRoutes: Routes = [
  {
    path:'', redirectTo:'/heroes', pathMatch:'full'
  },
  {
    path:'**',component:PageNotFoundComponent
  }
]
@NgModule({
  imports:[
    RouterModule.forRoot(appRoutes,
    // {
    //   enableTracing:true
    // }
   )
  ],
  exports:[RouterModule]//这里把RouterModule里的导出，引入它的模块就可以使用RouterModule里的指令和服务了
})
export class AppRoutingModule{}