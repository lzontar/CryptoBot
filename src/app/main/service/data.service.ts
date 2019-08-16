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
    header.append('Content-Type', 'application/json');
    header.append('Access-Control-Allow-Origin', '*');
    header.append('Access-Control-Allow-Credentials', 'true');
    header.append('X-API-Key', 'bc97423c1d10569915b803fee1b9f8ef5a6d2e1d');
    header.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');

    return this.http.get(this.serviceApiUrl, {headers: header});

  }
}
