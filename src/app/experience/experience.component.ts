import { Component, effect, inject, signal } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Experience } from '../models/experience';

import Modal from 'bootstrap/js/dist/modal';

import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  private apiService = inject(ApiService);
  experiences = signal<Experience[]>([]);
  skills: string[] = [];

  selectedExperience = signal<Experience | null>(null);

  constructor() {
    this.apiService.getExperience().subscribe({
      next: (res) => {
        const result = Array.isArray(res) ? res : [res];
        this.experiences.set(result as Experience[]);
        console.log('Experiences', result);
        result.forEach((exp) => {
          this.skills.push(exp.skills);
        });
        console.log('Skills', this.skills);
        console.log('signal', this.experiences());
      },
      error: (err) => console.error('Error fetching experience', err),
    });
  }

  openModal(experience: Experience) {
    this.selectedExperience.set(experience);

    const modalElement = document.getElementById('experienceModal');
    if (modalElement) {
      const modal = new Modal(modalElement);
      modal.show();
    }
  }
}
