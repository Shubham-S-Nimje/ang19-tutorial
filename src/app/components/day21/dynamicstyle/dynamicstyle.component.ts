import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamicstyle',
  imports: [],
  templateUrl: './dynamicstyle.component.html',
  styleUrl: './dynamicstyle.component.css',
})
export class DynamicstyleComponent {
  bgColor = 'red';
  fontSize = '30';
  padding = '0.5rem';
  textColor = 'white';

  backgroundColorChange(value: string) {
    this.bgColor = value;
  }
  textColorChange(value: string) {
    this.textColor = value;
  }
  fontChange(value: string) {
    this.fontSize = value;
  }
}
