import { Component } from '@angular/core'

import { Hero } from '../../service/hero/hero'
@Component({
  styleUrls:['./heroList.component.css'],
  templateUrl:'./heroList.component.html'
})
export class HeroListComponent{
  heroes: Hero[];
  constructor(){
    this.heroes = [{id:1,name:'ly'},{id:2,name:'sun'}]
  }
}