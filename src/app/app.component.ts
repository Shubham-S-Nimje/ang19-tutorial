import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { InterpolationComponent } from './components/day1/interpolation/interpolation.component';
import { AngularcliComponent } from './components/day2/angularcli/angularcli.component';
import { ComponentsComponent } from './components/day3/components/components.component';
import { BtnandfunctionComponent } from './components/day4/btnandfunction/btnandfunction.component';
import { DatatypesComponent } from './components/day5/datatypes/datatypes.component';
import { CounterappComponent } from './components/day6/counterapp/counterapp.component';
import { EventsComponent } from './components/day7/events/events.component';
import { InputfieldvalueComponent } from './components/day8/inputfieldvalue/inputfieldvalue.component';
import { StyleoptionComponent } from './components/day9/styleoption/styleoption.component';
import { IfelseComponent } from './components/day10/ifelse/ifelse.component';
import { ElseifComponent } from './components/day11/elseif/elseif.component';
import { SwitchcaseComponent } from './components/day12/switchcase/switchcase.component';
import { ForloopComponent } from './components/day13/forloop/forloop.component';
import { SignalsComponent } from './components/day14/signals/signals.component';
import { DatatypewithsignalsComponent } from './components/day15/datatypewithsignals/datatypewithsignals.component';
import { ComputedsignalsComponent } from './components/day16/computedsignals/computedsignals.component';
import { EffectinngComponent } from './components/day17/effectinng/effectinng.component';
import { LoopcontextualComponent } from './components/day18/loopcontextual/loopcontextual.component';
import { TwowaybindingComponent } from './components/day19/twowaybinding/twowaybinding.component';
import { TolistappComponent } from './pages/tolistapp/tolistapp.component';
import { DynamicstyleComponent } from './components/day21/dynamicstyle/dynamicstyle.component';
import { DirectivesComponent } from './components/day22/directives/directives.component';
import { RoutingComponent } from './components/day23/routing/routing.component';

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
    ElseifComponent,
    SwitchcaseComponent,
    ForloopComponent,
    SignalsComponent,
    DatatypewithsignalsComponent,
    ComputedsignalsComponent,
    EffectinngComponent,
    LoopcontextualComponent,
    TwowaybindingComponent,
    TolistappComponent,
    DynamicstyleComponent,
    DirectivesComponent,
    RoutingComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Shubham S. Nimje';
}
