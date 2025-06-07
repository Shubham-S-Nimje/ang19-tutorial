import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dynamicuser',
  imports: [],
  templateUrl: './dynamicuser.component.html',
  styleUrl: './dynamicuser.component.css',
})
export class DynamicuserComponent {
  userData: any = {};
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => (this.userData = params));
  }
}
