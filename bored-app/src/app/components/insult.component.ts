import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsultService } from '../services/insult.service';

@Component({
  selector: 'app-insult',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './insult.component.html',
  styleUrls: ['./insult.component.scss']
})
export class InsultComponent {
  insult: string = '';
  loading: boolean = false;
  error: string = '';

  constructor(private insultService: InsultService) {
    this.getNewInsult();
  }

  getNewInsult(): void {
    this.loading = true;
    this.error = '';
    this.insultService.getInsult().subscribe({
      next: (insult) => {
        this.insult = insult;
        this.loading = false;
        console.log('Insult fetched successfully:', insult);
      },
      error: (err) => {
        const errorMsg = err.error?.message || err.message || 'Unknown error';
        const errorStatus = err.status || 'No status';
        this.error = `Failed to fetch insult. Error ${errorStatus}: ${errorMsg}`;
        this.loading = false;
        console.error('Insult API Error:', {
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
