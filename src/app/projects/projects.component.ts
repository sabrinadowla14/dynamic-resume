import { Component, computed, effect, inject, signal } from '@angular/core';
import { ApiService } from '../services/api.service';

import { Project } from '../models/projects';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  private apiService = inject(ApiService);
  projects = signal<Project[]>([]);
  selectedProjectId = signal<number | null>(null);

  selectedProject = computed(
    () => this.projects().find((p) => p.id === this.selectedProjectId()) ?? null
  );

  constructor() {
    effect(() => {
      this.apiService.getProjects().subscribe({
        next: (res) => {
          console.log('Raw response', res);
          const result = Array.isArray(res) ? res : [res];
          this.projects.set(result);
          console.log('Projects:', this.projects());
          console.log('Selected Project ID:', this.selectedProjectId());
        },
        error: (err) => console.error('Error fetching projects', err),
      });
    });
  }

  onProjectChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.selectedProjectId.set(value ? +value : null);
  }
}
