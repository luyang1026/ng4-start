import { HEROES,Hero } from './hero'
import { Injectable } from '@angular/core'
import { Http,Headers } from '@angular/http'

import 'rxjs/add/operator/toPromise'
@Injectable()
export class HeroSevice{
  private heroesUrl = 'api/heroes'
  private errorHandler(error:any):Promise<any>{
    console.error('error',error)
    return Promise.reject(error.message||error)
  }
  constructor(
    private http: Http
  ){}
	getHeroes():Promise<Hero[]>{
    return this.http.get(this.heroesUrl)
      .toPromise()
      .then(response=>response.json().data as Hero[])
      .catch(this.errorHandler)
	}
  getHero(id:number):Promise<Hero>{
    const url = `${this.heroesUrl}/${id}`
    return this.http.get(url)
      .toPromise()
      .then(response=>response.json().data as Hero)
      .catch(this.errorHandler)
  }
  update(hero:Hero):Promise<
}