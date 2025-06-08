import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-reusecomponent',
  imports: [ChildComponent],
  templateUrl: './reusecomponent.component.html',
  styleUrl: './reusecomponent.component.css',
})
export class ReusecomponentComponent {
  users = ['Iron man', 'Thor', 'Spider Man', 'Black Widow'];
}
