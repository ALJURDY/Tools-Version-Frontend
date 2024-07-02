import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/projects.model';
import { Repository } from '../models/repository.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.baseUrl}`);
  }

  getRepositoriesByProjectId(projectId: number): Observable<Repository[]> {
    return this.http.get<Repository[]>(`${this.baseUrl}/${projectId}/repositories`);
  }
}
