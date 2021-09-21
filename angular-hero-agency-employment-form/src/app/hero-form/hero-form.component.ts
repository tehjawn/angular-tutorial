import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent implements OnInit {

  powers = [
    'Really Smart',
    'Super Flexible',
    'Super Hot',
    'Weather Changer',
  ]

  model = new Hero(
    18,
    'Dr IQ',
    this.powers[0],
    'Chuck Overstreet',
  )

  myHero = new Hero(
    42,
    'SkyDog',
    'Fetch any object at any distance',
    'Leslie Rollover',
  );

  getModel() {
    return this.toJSON(this.model)
  }

  getHero() {
    return this.toJSON(this.myHero)
  }

  toJSON(obj: any) {
    return JSON.stringify(obj, null, 2);
  }

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  ngOnInit(): void { 
    console.log(`My Hero is: ${this.myHero.name}`)
  }

}
