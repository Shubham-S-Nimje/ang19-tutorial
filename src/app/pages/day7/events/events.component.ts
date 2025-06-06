import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  imports: [],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css',
})
export class EventsComponent {
  handleEvent(event: Event) {
    console.log((event.target as HTMLInputElement).value);
  }
}
