import { Component } from '@angular/core'
import { Crisis, CRISIS } from '../../service/crisis-center/crisis.service'
@Component({
	templateUrl:'./crisis-list.component.html'
})
export class CrisisListComponent{
	private crisis: Crisis[]
	constructor(

	){
		this.crisis = CRISIS
	}
}