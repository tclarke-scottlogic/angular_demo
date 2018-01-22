import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service'
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;

  heroes: Hero[];

  constructor(private heroService: HeroService) {
  }

  getHeroes() : void{
    this.heroService.getHeroes().subscribe(heroes =>
      this.heroes = heroes
    );
  }

  ngOnInit() {
    console.info("initing hero component");
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    console.log(hero);
    this.selectedHero = hero;
  }

}
