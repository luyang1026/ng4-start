import { Component,OnInit } from '@angular/core'

import { Hero } from '../../service/hero/hero'
import { HeroSevice } from '../../service/hero/hero.service'
@Component({
  styleUrls:['./heroList.component.css'],
  templateUrl:'./heroList.component.html'
})
export class HeroListComponent implements OnInit{
  heroes: Hero[];
  constructor(private heroService:HeroSevice){
  }
  ngOnInit(){
  	this.heroes = this.heroService.getHeroes()
  }
}