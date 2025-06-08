import { Component } from '@angular/core';
import { InterpolationComponent } from '../day1/interpolation/interpolation.component';
import { AngularcliComponent } from '../day2/angularcli/angularcli.component';
import { ComponentsComponent } from '../day3/components/components.component';
import { BtnandfunctionComponent } from '../day4/btnandfunction/btnandfunction.component';
import { DatatypesComponent } from '../day5/datatypes/datatypes.component';
import { CounterappComponent } from '../day6/counterapp/counterapp.component';
import { EventsComponent } from '../day7/events/events.component';
import { InputfieldvalueComponent } from '../day8/inputfieldvalue/inputfieldvalue.component';
import { StyleoptionComponent } from '../day9/styleoption/styleoption.component';
import { IfelseComponent } from '../day10/ifelse/ifelse.component';
import { ElseifComponent } from '../day11/elseif/elseif.component';
import { SwitchcaseComponent } from '../day12/switchcase/switchcase.component';
import { ForloopComponent } from '../day13/forloop/forloop.component';
import { SignalsComponent } from '../day14/signals/signals.component';
import { DatatypewithsignalsComponent } from '../day15/datatypewithsignals/datatypewithsignals.component';
import { ComputedsignalsComponent } from '../day16/computedsignals/computedsignals.component';
import { EffectinngComponent } from '../day17/effectinng/effectinng.component';
import { LoopcontextualComponent } from '../day18/loopcontextual/loopcontextual.component';
import { TwowaybindingComponent } from '../day19/twowaybinding/twowaybinding.component';
import { DynamicstyleComponent } from '../day21/dynamicstyle/dynamicstyle.component';
import { DirectivesComponent } from '../day22/directives/directives.component';
import { RoutingComponent } from '../day23/routing/routing.component';
import {
  NgFor,
  NgIf,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
} from '@angular/common';
import { DynamicroutingComponent } from '../day26/dynamicrouting/dynamicrouting.component';
import { FormsComponent } from '../day28/forms/forms.component';
import { FormgroupComponent } from '../day29/formgroup/formgroup.component';
import { TdformsComponent } from '../day30/tdforms/tdforms.component';
import { DatatransferComponent } from '../day31/datatransfer/datatransfer.component';
import { ReusecomponentComponent } from '../day32/reusecomponent/reusecomponent.component';
import { ChildtoparentComponent } from '../day33/childtoparent/childtoparent.component';

@Component({
  selector: 'app-home',
  imports: [
    NgIf,
    NgFor,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
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
    DynamicstyleComponent,
    DirectivesComponent,
    RoutingComponent,
    DynamicroutingComponent,
    FormsComponent,
    FormgroupComponent,
    TdformsComponent,
    DatatransferComponent,
    ReusecomponentComponent,
    ChildtoparentComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  selectedComponent = 'interpolation';
  brother = 'Sanket nimje';
  user = {
    name: 'Iron man',
    age: 45,
    city: 'New York',
    email: 'ironman@gmail.com',
  };

  componentsList = [
    { label: 'Interpolation', key: 'interpolation' },
    { label: 'Angular CLI', key: 'angularcli' },
    { label: 'Components', key: 'components' },
    { label: 'Button + Function', key: 'btnandfunction' },
    { label: 'Data Types', key: 'datatypes' },
    { label: 'Counter App', key: 'counterapp' },
    { label: 'Events', key: 'events' },
    { label: 'Input Field', key: 'inputfieldvalue' },
    { label: 'Style Option', key: 'styleoption' },
    { label: 'If/Else', key: 'ifelse' },
    { label: 'Else If', key: 'elseif' },
    { label: 'Switch Case', key: 'switchcase' },
    { label: 'For Loop', key: 'forloop' },
    { label: 'Signals', key: 'signals' },
    { label: 'Signal Types', key: 'datatypewithsignals' },
    { label: 'Computed', key: 'computedsignals' },
    { label: 'Effect', key: 'effectinng' },
    { label: 'Contextual Loop', key: 'loopcontextual' },
    { label: 'Two-Way Binding', key: 'twowaybinding' },
    { label: 'Dynamic Style', key: 'dynamicstyle' },
    { label: 'Directives', key: 'directives' },
    { label: 'Routing', key: 'routing' },
    { label: 'Dynamic Routing', key: 'dynamicrouting' },
    { label: 'Forms', key: 'forms' },
    { label: 'Form Group', key: 'formgroup' },
    { label: 'Template Driven Group', key: 'tdforms' },
    { label: 'Parent to child Data Transfer', key: 'datatransfer' },
    { label: 'Reuse Component', key: 'reusecomponent' },
    { label: 'Child to parent', key: 'childtoparent' },
  ];

  showComponent(key: string) {
    this.selectedComponent = key;
    // console.log(this.selectedComponent);
  }

  handleUser(user: any) {
    this.user = user;
    console.log(user);
  }
}
