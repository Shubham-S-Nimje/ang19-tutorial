import {
  Component,
  computed,
  effect,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';

@Component({
  selector: 'app-datatypewithsignals',
  imports: [],
  templateUrl: './datatypewithsignals.component.html',
  styleUrl: './datatypewithsignals.component.css',
})
export class DatatypewithsignalsComponent {
  data: WritableSignal<number | string> = signal(10);
  count: Signal<number> = computed(() => 50);

  updateSignal() {
    this.data.set('hello');
    // this.data.update((prev) => prev + 10);
    // this.count.set(100);
  }
}
