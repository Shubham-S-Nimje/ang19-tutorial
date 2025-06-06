import { Component } from '@angular/core';

@Component({
  selector: 'app-loopcontextual',
  imports: [],
  templateUrl: './loopcontextual.component.html',
  styleUrl: './loopcontextual.component.css',
})
export class LoopcontextualComponent {
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
}
