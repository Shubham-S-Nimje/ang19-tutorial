import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css',
})
export class SignalsComponent {
  count = signal(10);
  x = 20;

  constructor() {
    effect(() => {
      console.log(`Count is: ${this.count()}`);
    });
  }

  updateValue() {
    this.x = 510;
  }
}
