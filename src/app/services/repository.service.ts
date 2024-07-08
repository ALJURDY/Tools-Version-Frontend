import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Repository } from '../models/repository.model';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  private apiUrl = '';

  constructor(private http: HttpClient) { }

  getRepositoryById(id: string): Observable<Repository> {
    return this.http.get<Repository>(`${this.apiUrl}/repository/${id}`);
  }

}
