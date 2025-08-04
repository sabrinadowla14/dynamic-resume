import { Injectable } from '@angular/core';
import { Profile } from '../models/profile';
import { Observable } from 'rxjs';
import { Experience } from '../models/experience';
import { Project } from '../models/projects';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://localhost:3000/api';
  constructor(private http: HttpClient) {}

  getProfile(): Observable<Profile> {
    return this.http.get<Profile>('api/profile');
  }

  getExperience(): Observable<Experience[]> {
    return this.http.get<Experience[]>('api/experience');
  }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>('api/projects');
  }
}
