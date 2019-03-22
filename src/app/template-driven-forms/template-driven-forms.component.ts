import { Hero } from './../hero';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css']
})
export class TemplateDrivenFormsComponent {

  powers: string[] = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr. IQ', this.powers[0], 'Chuck Overstreet');

  submitted: boolean = false;

  onSubmit() { this.submitted = true; console.log("submited"); }

  //TODO: remove this when done
  get diagnostic() { return JSON.stringify(this.model); }

  newHero() {
    this.model = new Hero(1, '', '', '');
  }



}
