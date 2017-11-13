import { Component,OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Hero } from '../../service/hero/hero'
import { HeroSevice } from '../../service/hero/hero.service'
@Component({
  styleUrls:['./heroList.component.css'],
  templateUrl:'./heroList.component.html'
})
export class HeroListComponent implements OnInit{
  heroes: Hero[];
  constructor(
    private heroService:HeroSevice,
    private router:Router
    ){
  }
  goToDetail(id:number):void{
    this.router.navigate(['hero',id])
  }
  ngOnInit():void{
  	this.heroService.getHeroes().then(heroes=>this.heroes = heroes)
  }
  add(name:string):void{
    name = name.trim()
    if(!name)return;
    this.heroService.create(name)
      .then(hero=>{
        this.heroes.push(hero)
      })
  }
  delete(hero:Hero):void{
    this.heroService.delete(hero.id)
      .then(()=>{
        this.heroes = this.heroes.filter(h=>h!==hero)
      })
  }
}