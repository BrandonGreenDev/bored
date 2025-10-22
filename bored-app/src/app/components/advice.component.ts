import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdviceService } from '../services/advice.service';

@Component({
  selector: 'app-advice',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './advice.component.html',
  styleUrls: ['./advice.component.scss']
})
export class AdviceComponent {
  advice: string = '';
  loading: boolean = false;
  error: string = '';

  constructor(private adviceService: AdviceService) {
    this.getNewAdvice();
  }

  getNewAdvice(): void {
    this.loading = true;
    this.error = '';
    this.adviceService.getAdvice().subscribe({
      next: (advice) => {
        this.advice = advice;
        this.loading = false;
        console.log('Advice fetched successfully:', advice);
      },
      error: (err) => {
        const errorMsg = err.error?.message || err.message || 'Unknown error';
        const errorStatus = err.status || 'No status';
        this.error = `Failed to fetch advice. Error ${errorStatus}: ${errorMsg}`;
        this.loading = false;
        console.error('Advice API Error:', {
          status: err.status,
          statusText: err.statusText,
          error: err.error,
          message: err.message,
          url: err.url
        });
      }
    });
  }
}
