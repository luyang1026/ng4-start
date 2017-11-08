import { HEROES,Hero } from './hero'
import { Injectable } from '@angular/core'

@Injectable()
export class HeroSevice{
	getHeroes():Hero[]{
		return HEROES
	}
}