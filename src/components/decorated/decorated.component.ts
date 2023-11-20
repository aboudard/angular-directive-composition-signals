import { Component, inject, OnInit } from '@angular/core';
import { BorderDirective } from '../../directives/border.directive';
import { HighlightDirective } from '../../directives/highlight.directive';

@Component({
  selector: 'app-decorated',
  templateUrl: './decorated.component.html',
  styleUrls: ['./decorated.component.css'],
  standalone: true,
  styles: `
    :host {
      display: block;
    }
  `,
  hostDirectives: [HighlightDirective, BorderDirective],
})
export class DecoratedComponent implements OnInit {

  highlight = inject(HighlightDirective);

  ngOnInit() {
    this.highlight.color = 'darkseagreen';
  }
}
