import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InsultService {
  private apiUrl = 'https://insult.mattbas.org/api/insult';

  constructor(private http: HttpClient) {}

  getInsult(): Observable<string> {
    // Use plain text insult API which doesn't have CORS issues
    const cacheBuster = new Date().getTime();
    return this.http.get(`${this.apiUrl}?t=${cacheBuster}`, {
      responseType: 'text'
    });
  }
}
