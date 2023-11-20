import { Directive, Input, signal } from '@angular/core';

@Directive({
  selector: '[appBorder]',
  standalone: true,
  host: {
    '[style.border]': 'borderSignal()',
    '(mouseenter)': 'enter()',
    '(mouseleave)': 'leave()'
  }
})
export class BorderDirective {

  @Input() color = 'red'

  borderSignal = signal<string>('');

  enter(): void {
    this.borderSignal.update(() => `1px solid ${this.color}`);
  }

  leave(): void {
    this.borderSignal.update(() => '');
  }


}