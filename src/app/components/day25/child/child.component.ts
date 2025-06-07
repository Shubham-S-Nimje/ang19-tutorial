import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  username: string | null = '';
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    let user = this.route.snapshot.paramMap.get('name');
    this.username = user;
  }
}
