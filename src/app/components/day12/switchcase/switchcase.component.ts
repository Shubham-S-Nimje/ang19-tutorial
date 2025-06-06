import { Component } from '@angular/core';

@Component({
  selector: 'app-switchcase',
  imports: [],
  templateUrl: './switchcase.component.html',
  styleUrl: './switchcase.component.css',
})
export class SwitchcaseComponent {
  color: string = 'red';

  changeColor(newColor: string) {
    this.color = newColor;
  }
}
