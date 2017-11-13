import { Component,OnInit } from '@angular/core'
import { ActivatedRoute,Router,ParamMap } from '@angular/router'

import { HeroSevice } from '../../service/hero/hero.service'
import { Hero } from '../../service/hero/hero'
import 'rxjs/add/operator/switchMap'
@Component({
	templateUrl:'./heroDetail.component.html',
	styleUrls:['./heroDetail.component.css']
})
export class HeroDetailComponent implements OnInit{
  hero:Hero;
  constructor(
    private route:ActivatedRoute,
    private heroService:HeroSevice,
    private router:Router
  ){}
  back(id:number){
    this.router.navigate(['heroes',{id:id}])
  }
  save(){
    this.heroService.update(this.hero)
      .then(()=>this.back(this.hero.id))
  }
  ngOnInit():void{
    this.route.paramMap
      .switchMap((params:ParamMap)=>this.heroService.getHero(+params.get('id')))
      .subscribe(hero=>this.hero = hero)
  }
}
