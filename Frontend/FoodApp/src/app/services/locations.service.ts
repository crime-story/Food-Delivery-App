import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {
  public url = 'https://localhost:7225/api/location';
  constructor(
    public http: HttpClient,

  ) { }

  public getAll(): Observable<any> {
    return this.http.get(`${this.url}/getAll`);
  }
}
