import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-computedsignals',
  imports: [],
  templateUrl: './computedsignals.component.html',
  styleUrl: './computedsignals.component.css',
})
export class ComputedsignalsComponent {
  // x = 10;
  // y = 20;
  // z = this.x + this.y;

  // showValue() {
  //   console.log('Z:', this.z);
  //   this.x = 500;

  //   this.z = this.x + this.y;
  //   console.log('Z:', this.z);
  // }

  x = signal(10);
  y = signal(20);
  z = computed(() => this.x() + this.y());

  showValue() {
    console.log('Z:', this.z());
    this.x.set(500);
    console.log('Z:', this.z());
  }

  updatexValue() {
    this.x.set(1000);
  }
}
