import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  title = 'Shubham S. Nimje';
  constructor(private router: Router) {}

  loginHandler() {
    this.router.navigate(['login'], { queryParams: { name: 'Shubham Nimje' } });
  }
}
