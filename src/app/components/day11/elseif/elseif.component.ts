import { Component } from '@angular/core';

@Component({
  selector: 'app-elseif',
  imports: [],
  templateUrl: './elseif.component.html',
  styleUrl: './elseif.component.css',
})
export class ElseifComponent {
  display = true;
  colorName = 'bg-red';

  clickHandler(value: string) {
    if (value === 'red') {
      this.colorName = 'bg-red';
    } else if (value === 'green') {
      this.colorName = 'bg-green';
    } else if (value === 'yellow') {
      this.colorName = 'bg-yellow';
    } else if (value === 'black') {
      this.colorName = 'bg-black';
    } else {
      this.colorName = 'bg-black';
    }
  }
  getColor(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    // console.log(value);
    if (value === 'red') {
      this.colorName = 'bg-red';
    } else if (value === 'green') {
      this.colorName = 'bg-green';
    } else if (value === 'yellow') {
      this.colorName = 'bg-yellow';
    } else if (value === 'black') {
      this.colorName = 'bg-black';
    } else {
      this.colorName = 'bg-black';
    }
  }
}
