import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private serviceApiUrl: string = '/api';

  constructor(private http: HttpClient) {

  }

  getCryptoCurrencyData(): Observable<object> {
    const header = new HttpHeaders();
    return this.http.get(this.serviceApiUrl, {headers: header});

  }
}
