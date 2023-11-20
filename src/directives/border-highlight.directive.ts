import { Directive } from '@angular/core';
import { BorderDirective } from './border.directive';
import { HighlightDirective } from './highlight.directive';

@Directive({
  selector: '[appBorderHighlight]',
  hostDirectives: [
    { directive: HighlightDirective, inputs: ['color: backgroundColor'] }, 
    { directive: BorderDirective, inputs: ['color: borderColor'] }
  ],
  standalone: true,
})
export class BorderHighlightDirective {

  constructor() { }

}