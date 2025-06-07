import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  username: string | null = '';
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    let user = this.route.data.subscribe(
      (data) => (this.username = data['name'])
    );
  }
}
