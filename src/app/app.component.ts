import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InterpolationComponent } from './pages/day1/interpolation/interpolation.component';
import { AngularcliComponent } from './pages/day2/angularcli/angularcli.component';
import { ComponentsComponent } from './pages/day3/components/components.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    InterpolationComponent,
    AngularcliComponent,
    ComponentsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Shubham S. Nimje';
}
