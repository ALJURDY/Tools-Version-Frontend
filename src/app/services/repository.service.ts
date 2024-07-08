import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Repository } from '../models/repository.model';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  private baseUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  getRepositoryByName(name: string): Observable<Repository> {
    return this.http.get<Repository>(`${this.baseUrl}repositories/${name}`);
  }

}
