import { Component } from '@angular/core';

@Component({
  selector: 'app-ifelse',
  imports: [],
  templateUrl: './ifelse.component.html',
  styleUrl: './ifelse.component.css',
})
export class IfelseComponent {
  display1 = true;
  display2 = true;

  hideHandler1() {
    this.display1 = !this.display1;
  }
  hideHandler2() {
    this.display2 = !this.display2;
  }
}
