import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}
  onLogout() {
    this.authService.logout();
    this.router.navigateByUrl('/auth');
  }
}
