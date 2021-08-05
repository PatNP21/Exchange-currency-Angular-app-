import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {

  constructor(private http:HttpClient) { }

  getInitialCurrency(val1, val2):Observable<any> {
    let API = `https://free.currconv.com/api/v7/convert?q=${val1}_${val2}&compact=ultra&apiKey=f593b51cf1fef4c3869d`;
    return this.http.get<any>(API);
  }
}
