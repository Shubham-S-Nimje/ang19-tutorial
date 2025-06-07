import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dynamicrouting',
  imports: [RouterLink],
  templateUrl: './dynamicrouting.component.html',
  styleUrl: './dynamicrouting.component.css',
})
export class DynamicroutingComponent {
  users: {
    id: number;
    name: string;
    age: number;
    city: string;
    email: string;
  }[] = [
    {
      id: 2,
      name: 'Iron man',
      age: 45,
      city: 'New York',
      email: 'ironman@gmail.com',
    },
    { id: 3, name: 'Thor', age: 1500, city: 'Asgard', email: 'thor@gmail.com' },
    { id: 4, name: 'Hulk', age: 40, city: 'New York', email: 'hulk@gmail.com' },
    {
      id: 5,
      name: 'Vision',
      age: 5,
      city: 'New York',
      email: 'vision@gmail.com',
    },
    {
      id: 6,
      name: 'Groot',
      age: 100,
      city: 'Xandar',
      email: 'groot@gmail.com',
    },
    {
      id: 7,
      name: 'Black Widow',
      age: 35,
      city: 'New York',
      email: 'blackwidow@gmail.com',
    },
    {
      id: 8,
      name: 'Captain India',
      age: 100,
      city: 'New York',
      email: 'captainindia@gmail.com',
    },
  ];
}
