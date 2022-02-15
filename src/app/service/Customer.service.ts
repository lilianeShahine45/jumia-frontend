import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from '../model/Customer';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CustomerService {

  private customersUrl: string;

  constructor(private http: HttpClient) {
  }

  public findAll(countryCode :string,state :string): Observable<Customer[]> {
    this.customersUrl = 'http://localhost:8080/api/customer';
    if(!countryCode || countryCode.length != 0) 
    {
      this.customersUrl= this.customersUrl.concat("?country="+countryCode);
      alert("url"+this.customersUrl);
      if(!state || state.length != 0)
      this.customersUrl= this.customersUrl.concat("&state="+state);
    }
    return this.http.get<Customer[]>(this.customersUrl);
  }

  public save(customer: Customer) {
    return this.http.post<Customer>(this.customersUrl, customer);
  }
}