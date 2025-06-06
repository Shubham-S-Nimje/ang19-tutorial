import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-effectinng',
  imports: [],
  templateUrl: './effectinng.component.html',
  styleUrl: './effectinng.component.css',
})
export class EffectinngComponent {
  username = signal('Shubham');
  displayHeading = false;
  count = signal(0);

  constructor() {
    effect(() => {
      if (this.count() === 2) {
        this.displayHeading = true;

        setTimeout(() => {
          this.displayHeading = false;
        }, 3000);
      } else {
        this.displayHeading = false;
      }
    });
  }

  updateUsername() {
    this.username.set('Shubham S. Nimje');
  }

  togleValue() {
    this.count.set(this.count() + 1);
    this.displayHeading = !this.displayHeading;
  }
}
