import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FactsService {
  private apiUrl = 'https://uselessfacts.jsph.pl/api/v2/facts/random';

  constructor(private http: HttpClient) {}

  getFact(): Observable<string> {
    return this.http.get<{ text: string }>(this.apiUrl).pipe(
      map(response => response.text)
    );
  }
}
