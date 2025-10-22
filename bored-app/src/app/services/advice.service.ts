import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface AdviceResponse {
  slip: {
    id: number;
    advice: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class AdviceService {
  private apiUrl = 'https://api.adviceslip.com/advice';

  constructor(private http: HttpClient) {}

  getAdvice(): Observable<string> {
    // Add cache buster to get fresh advice each time
    const cacheBuster = new Date().getTime();
    return this.http.get<AdviceResponse>(`${this.apiUrl}?t=${cacheBuster}`).pipe(
      map(response => response.slip.advice)
    );
  }
}
