import { Component } from '@angular/core'
import { HeroSearchService } from '../../service/hero/hero-search.service'
@Component({
  selector:'hero-search-box',
  templateUrl:'./heroSearch.component.html',
  styleUrls: ['./heroSearch.component.css'],
  providers: [HeroSearchService]
})
export class HeroSearchBox{
  constructor(
    private heroSearchService:HeroSearchService
  ){}
  search(term:string){
    if(!term)return;
    // this.heroSearchService.search()
  }
}
