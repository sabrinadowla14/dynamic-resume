import { Injectable } from '@angular/core';
import { Profile } from '../models/profile';
import { Observable, of } from 'rxjs';
import { Experience } from '../models/experience';
import { Project } from '../models/projects';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {
  MOCK_EXPERIENCES,
  MOCK_PROFILE,
  MOCK_PROJECTS,
} from '../mock/mock-data';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  // getProfile(): Observable<Profile> {
  //   return this.http.get<Profile>(`${environment.apiUrl}/projects`);
  // }

  // getExperience(): Observable<Experience[]> {
  //   return this.http.get<Experience[]>(`${environment.apiUrl}/experience`);
  // }

  // getProjects(): Observable<Project[]> {
  //   return this.http.get<Project[]>(`${environment.apiUrl}/projects`);
  // }
  getProfile(): Observable<Profile> {
    return of(MOCK_PROFILE);
  }

  getExperience(): Observable<Experience[]> {
    return of(MOCK_EXPERIENCES);
  }

  getProjects(): Observable<Project[]> {
    return of(MOCK_PROJECTS);
  }
}
