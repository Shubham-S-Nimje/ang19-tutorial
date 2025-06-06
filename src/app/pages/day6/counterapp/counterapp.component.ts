import { Component } from '@angular/core';

@Component({
  selector: 'app-counterapp',
  imports: [],
  templateUrl: './counterapp.component.html',
  styleUrl: './counterapp.component.css',
})
export class CounterappComponent {
  number: number = 0;

  incrementClicked() {
    this.number++;
  }

  decrementClicked() {
    this.number--;
  }

  resetClicked() {
    this.number = 0;
  }

  clickedHandler(value: string) {
    if (value === 'increment') {
      this.number++;
    } else if (value === 'decrement') {
      if (this.number > 0) {
        this.number--;
      }
    } else if (value === 'reset') {
      this.number = 0;
    }
  }
}
