import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, Observable, throwError } from 'rxjs';
import { Repository } from '../models/repository.model';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {
  private baseUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  getRepositoryByName(name: string): Observable<Repository> {
    return this.http.get<Repository>(`${this.baseUrl}repositories/${name}`).pipe(
      map(repo => ({
        ...repo,
        percentage: Number(repo.percentage)
      }))
    );
  }
  getCurrentVersion(repositoryId: number, dependencyId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}dependencies/current-version/${repositoryId}/${dependencyId}`).pipe(
      catchError(this.handleError)
    );;
  }
  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error);
    return throwError('Something bad happened; please try again later.');
  }
}
