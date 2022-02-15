import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Country } from '../model/Country';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CountryService {

  private countrysUrl: string;

  constructor(private http: HttpClient) {
    this.countrysUrl = 'http://localhost:8080/api/countries';
  }

  public findAll(): Observable<Country[]> {
    return this.http.get<Country[]>(this.countrysUrl);
  }

  public save(country: Country) {
    return this.http.post<Country>(this.countrysUrl, country);
  }
}