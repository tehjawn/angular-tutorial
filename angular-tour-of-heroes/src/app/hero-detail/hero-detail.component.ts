import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { MessageService } from '../message.service';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero | undefined;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
    this.getHero();
    this.messageService.add(
      `HeroesComponent: Selected hero id=${this.hero?.id}`
    )
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(h => this.hero = h);
  }

  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack())
    }
  }

  goBack(): void {
    this.location.back();
  }

}
