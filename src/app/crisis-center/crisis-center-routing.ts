import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { CrisisCenterComponent } from '../component/crisis-center/crisis-center.component'
import { CrisisListComponent } from '../component/crisis-center/crisis-list.component'
import { CrisisHomeComponent } from '../component/crisis-center/crisis-home.component'

const route:Routes = [
	{
		path:'crisis-center',
		component: CrisisCenterComponent,
		children:[
			{
				path:'',
				component: CrisisListComponent,
				children:[
					// {
					// 	// path:':id'
					// 	// component:
					// },
					{
						path: '',
						component: CrisisHomeComponent
					}
				]
			}
		]
	}
]
@NgModule({
	imports:[
		RouterModule.forChild(route)
	],
	exports:[RouterModule]
})
export class CrisisRoutingModule{}
