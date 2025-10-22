import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FactsService } from '../services/facts.service';

@Component({
  selector: 'app-facts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './facts.component.html',
  styleUrls: ['./facts.component.scss']
})
export class FactsComponent {
  fact: string = '';
  loading: boolean = false;
  error: string = '';

  constructor(private factsService: FactsService) {
    this.getNewFact();
  }

  getNewFact(): void {
    this.loading = true;
    this.error = '';
    this.factsService.getFact().subscribe({
      next: (fact) => {
        this.fact = fact;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to fetch fact. Please try again.';
        this.loading = false;
        console.error(err);
      }
    });
  }
}
