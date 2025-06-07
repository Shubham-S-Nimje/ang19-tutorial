import {
  NgFor,
  NgIf,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
} from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  imports: [NgIf, NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css',
})
export class DirectivesComponent {
  show = true;
  names = ['Iron man', 'Thor', 'Spider Man', 'Black Widow'];
  color = 'purple';

  students: { name: string; age: number; city: string; email: string }[] = [
    { name: 'Iron man', age: 45, city: 'New York', email: 'ironman@gmail.com' },
    { name: 'Thor', age: 1500, city: 'Asgard', email: 'thor@gmail.com' },
    { name: 'Hulk', age: 40, city: 'New York', email: 'hulk@gmail.com' },
    { name: 'Vision', age: 5, city: 'New York', email: 'vision@gmail.com' },
    { name: 'Groot', age: 100, city: 'Xandar', email: 'groot@gmail.com' },
    {
      name: 'Black Widow',
      age: 35,
      city: 'New York',
      email: 'blackwidow@gmail.com',
    },
    {
      name: 'Captain India',
      age: 100,
      city: 'New York',
      email: 'captainindia@gmail.com',
    },
  ];

  showHandler() {
    this.show = !this.show;
  }
  backgroundColorChange(value: string) {
    this.color = value;
  }
}
