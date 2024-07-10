import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dependency } from '../models/dependency.model';

@Injectable({
    providedIn: 'root'
})
export class DependencyService {
    private baseUrl = 'http://localhost:8080/dependencies';

    constructor(private http: HttpClient) { }

    getAllDependencies(): Observable<Dependency[]> {
        return this.http.get<Dependency[]>(`${this.baseUrl}`);
    }
}