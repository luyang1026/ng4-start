import { Component,OnInit } from '@angular/core'
import { ActivatedRoute, ParamMap } from '@angular/router'
@Component({

})
export class CrisisDetailComponent implements OnInit{
	selectedId:number;
	constructor(
		private router: ActivatedRoute
	){

	}
	ngOnInit():void{
		this.router.paramMap
			.switchMap((params: ParamMap)=>{
				this.selectedId = +params.get('id')
				
			})
	}
}