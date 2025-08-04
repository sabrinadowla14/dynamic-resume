import { HeaderComponent } from './header/header.component';
import { ProjectsComponent } from './projects/projects.component';
import { LayoutComponent } from './layout/layout.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./experience/experience.component').then(
            (m) => m.ExperienceComponent
          ),
      },
      {
        path: 'projects',
        loadComponent: () =>
          import('./projects/projects.component').then(
            (m) => m.ProjectsComponent
          ),
      },
      {
        path: 'skills-graph',
        loadComponent: () =>
          import('./skills-graph/skills-graph.component').then(
            (m) => m.SkillsGraphComponent
          ),
      },
    ],
  },
];
