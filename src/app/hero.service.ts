import { MessageService } from './message.service';
import { HEROES } from './mock-heroes';
import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private messageService: MessageService,
    private http: HttpClient,
    ) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroServise: fetched heroes')
   return of (HEROES);
  }

  getHero(id:number): Observable<Hero>{
    this.messageService.add(`HeroServise: fetched hero id=${id}`)
    return of(HEROES.find(hero=>hero.id ===id))
  }
}
