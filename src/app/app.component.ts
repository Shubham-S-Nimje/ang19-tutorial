import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InterpolationComponent } from './pages/day1/interpolation/interpolation.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InterpolationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Shubham S. Nimje';
}
