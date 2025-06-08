import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-compopnentlifecycle',
  imports: [],
  templateUrl: './compopnentlifecycle.component.html',
  styleUrl: './compopnentlifecycle.component.css',
})
export class CompopnentlifecycleComponent {
  @Input() counter = 0;
  name = 'Shubham';

  constructor() {
    console.log('Constructor');
    this.name = 'Sanket';
  }

  ngOnInit() {
    console.log('ngOnInit');
    this.name = 'Rahul';
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

  ngOnChanges() {
    console.log('ngOnChange');
  }
}
