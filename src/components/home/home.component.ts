import { Component, OnInit, signal } from '@angular/core';
import { BorderHighlightDirective } from '../../directives/border-highlight.directive';
import { BorderDirective } from '../../directives/border.directive';
import { HighlightDirective } from '../../directives/highlight.directive';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [HighlightDirective, BorderDirective, BorderHighlightDirective],
  standalone: true,
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
