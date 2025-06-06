import { Component } from '@angular/core';

@Component({
  selector: 'app-btnandfunction',
  imports: [],
  templateUrl: './btnandfunction.component.html',
  styleUrl: './btnandfunction.component.css',
})
export class BtnandfunctionComponent {
  number = 0;
  text = '';
  onClick() {
    this.number++;
    if (this.number === 5) {
      this.otherFunction();
    } else {
      this.text = '';
    }
  }

  otherFunction() {
    this.number = 0;
    this.text = 'Other function called';
  }
}
