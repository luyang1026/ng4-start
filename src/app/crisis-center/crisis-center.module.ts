import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { CrisisRoutingModule } from './crisis-center-routing'
import { Crisis, CRISIS} from '../service/crisis-center/crisis.service'

import { CrisisCenterComponent } from '../component/crisis-center/crisis-center.component'
import { CrisisListComponent } from '../component/crisis-center/crisis-list.component'
import { CrisisHomeComponent } from '../component/crisis-center/crisis-home.component'

@NgModule({
	imports: [
		CommonModule,
		CrisisRoutingModule,
	],
	declarations:[
		CrisisCenterComponent,
		CrisisListComponent,
		CrisisHomeComponent
	],
	providers:[

	]
})
export class CrisisModule{}