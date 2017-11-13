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
  private headers = new Headers({'Content-Type':'application/json'})
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
  update(hero:Hero):Promise<void>{
    const url = `${this.heroesUrl}/${hero.id}`
    return this.http
      .put(url,JSON.stringify(hero),{headers:this.headers})
      .toPromise()
      .then(hero=>hero)
      .catch(this.errorHandler)
  }
  create(name:string):Promise<Hero>{
    const url = `${this.heroesUrl}`
    return this.http
      .post(url,JSON.stringify({name:name}),{headers:this.headers})
      .toPromise()
      .then(response=>response.json().data as Hero)
      .catch(this.errorHandler)
  }
  delete(id:number):Promise<void>{
    const url = `${this.heroesUrl}/${id}`
    return this.http
      .delete(url,{headers:this.headers})    
      .toPromise()
      .then(()=>null)
      .catch(this.errorHandler)
  }
}