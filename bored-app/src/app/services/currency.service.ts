import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface CurrencyRates {
  result: string;
  base_code: string;
  rates: { [key: string]: number };
  time_last_update_utc: string;
}

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private apiUrl = 'https://open.er-api.com/v6/latest';

  constructor(private http: HttpClient) {}

  getRates(baseCurrency: string = 'USD'): Observable<CurrencyRates> {
    return this.http.get<CurrencyRates>(`${this.apiUrl}/${baseCurrency}`);
  }
}
