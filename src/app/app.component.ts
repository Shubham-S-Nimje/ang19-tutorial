import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InterpolationComponent } from './pages/day1/interpolation/interpolation.component';
import { AngularcliComponent } from './pages/day2/angularcli/angularcli.component';
import { ComponentsComponent } from './pages/day3/components/components.component';
import { BtnandfunctionComponent } from './pages/day4/btnandfunction/btnandfunction.component';
import { DatatypesComponent } from './pages/day5/datatypes/datatypes.component';
import { CounterappComponent } from './pages/day6/counterapp/counterapp.component';
import { EventsComponent } from './pages/day7/events/events.component';
import { InputfieldvalueComponent } from './pages/day8/inputfieldvalue/inputfieldvalue.component';
import { StyleoptionComponent } from './pages/day9/styleoption/styleoption.component';
import { IfelseComponent } from './pages/day10/ifelse/ifelse.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    InterpolationComponent,
    AngularcliComponent,
    ComponentsComponent,
    BtnandfunctionComponent,
    DatatypesComponent,
    CounterappComponent,
    EventsComponent,
    InputfieldvalueComponent,
    StyleoptionComponent,
    IfelseComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Shubham S. Nimje';
}
