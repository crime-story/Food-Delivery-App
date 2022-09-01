import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  public addLocation(location: any): Observable<any> {
    return this.http.post(`${this.url}/`, location);
  }

  public editLocation(location: any): Observable<any> {
    return this.http.put(`${this.url}/`, location);
  }

  public deleteLocation(id: any): Observable<any> {
    return this.http.delete(`${this.url}/${id}`); 
  }
}
