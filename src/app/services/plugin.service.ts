import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plugin } from '../models/plugin.model';

@Injectable({
  providedIn: 'root'
})
export class PluginService {

  private baseUrl = 'http://localhost:8080/plugins';

  constructor(private http: HttpClient) { }

  getPluginByName(name:string|null): Observable<Plugin> {
    return this.http.get<Plugin>(`${this.baseUrl}/${name}`);
  }

}
