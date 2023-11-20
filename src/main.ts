import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { DecoratedComponent } from './components/decorated/decorated.component';
import { HomeComponent } from './components/home/home.component';

@Component({
  selector: 'app-root',
  imports: [
    HomeComponent, DecoratedComponent
  ],
  styles: `
    :host {
      display: block;
      padding: 1rem;
    }
  `,
  standalone: true,
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
    <app-home></app-home>
    <app-decorated></app-decorated>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
