import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Profile } from '../models/profile';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  profile?: Profile;
  showAlert = true;
  constructor(
    private apiService: ApiService,
    public router: Router,
    private location: Location
  ) {}
  ngOnInit(): void {
    this.apiService.getProfile().subscribe((profile) => {
      this.profile = profile;
      console.log('profile', this.profile);
    });

    // Auto dismiss alert after 3 seconds
    setTimeout(() => {
      this.showAlert = false;
    }, 3000); // 3000ms = 3 seconds
  }

  goBack() {
    this.location.back();
  }
}
