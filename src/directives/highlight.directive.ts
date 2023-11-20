import { computed, Directive, Input, signal } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
  host: {
    '[style.background-color]': 'colorSignal()',
    '(mouseenter)': 'enter()',
    '(mouseleave)': 'leave()'
  }
})
export class HighlightDirective {

  @Input() color = 'yellow'

  colorSignal = signal<string>('');

  enter(): void {
    this.colorSignal.update(() => this.color);
  }

  leave(): void {
    this.colorSignal.update(() => '');
  }

}