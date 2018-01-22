import { Component, OnInit, Input} from '@angular/core';
import { Hero } from '../../hero';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  @Input()
  heroes: Hero[];

  @Input()
  selectedHero: Hero;

  constructor() { }

  ngOnInit() {
  }

  onSelect(hero: Hero): void{
    console.log(hero);
    this.selectedHero = hero;
  }
}
