import { Component, OnInit } from '@angular/core';
import { Hero } from '../model/hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes!: Hero[];

  constructor(
    private heroService: HeroService
  ) {
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(res => this.heroes = res);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return undefined;
    }

    this.heroService.addHero({name} as Hero)
      .subscribe(res => {
        this.heroes.push(res)
      });
  }

}
