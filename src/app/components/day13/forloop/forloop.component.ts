import { Component } from '@angular/core';

@Component({
  selector: 'app-forloop',
  imports: [],
  templateUrl: './forloop.component.html',
  styleUrl: './forloop.component.css',
})
export class ForloopComponent {
  users: string[] = [
    'Iron man',
    'Thor',
    'Hulk',
    'Vision',
    'Groot',
    'Black Widow',
    'Captain India',
    'Spider Man',
    'Doctor Strange',
    'Black Panther',
  ];

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

  getName(name: string, email: string) {
    alert(`${name} email is ${email}`);
  }
}
