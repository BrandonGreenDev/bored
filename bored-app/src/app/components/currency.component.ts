import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CurrencyService, CurrencyRates } from '../services/currency.service';

@Component({
  selector: 'app-currency',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent {
  rates: CurrencyRates | null = null;
  loading: boolean = false;
  error: string = '';

  selectedCurrency: string = 'USD';
  amount: number = 1;

  popularCurrencies = [
    { code: 'USD', name: 'US Dollar', flag: '🇺🇸' },
    { code: 'EUR', name: 'Euro', flag: '🇪🇺' },
    { code: 'GBP', name: 'British Pound', flag: '🇬🇧' },
    { code: 'JPY', name: 'Japanese Yen', flag: '🇯🇵' },
    { code: 'CAD', name: 'Canadian Dollar', flag: '🇨🇦' },
    { code: 'AUD', name: 'Australian Dollar', flag: '🇦🇺' },
    { code: 'CHF', name: 'Swiss Franc', flag: '🇨🇭' },
    { code: 'CNY', name: 'Chinese Yuan', flag: '🇨🇳' }
  ];

  constructor(private currencyService: CurrencyService) {
    this.getRates();
  }

  getRates(): void {
    this.loading = true;
    this.error = '';
    this.currencyService.getRates(this.selectedCurrency).subscribe({
      next: (rates) => {
        this.rates = rates;
        this.loading = false;
        console.log('Currency rates fetched successfully:', rates);
      },
      error: (err) => {
        const errorMsg = err.error?.message || err.message || 'Unknown error';
        const errorStatus = err.status || 'No status';
        this.error = `Failed to fetch rates. Error ${errorStatus}: ${errorMsg}`;
        this.loading = false;
        console.error('Currency API Error:', {
          status: err.status,
          statusText: err.statusText,
          error: err.error,
          message: err.message,
          url: err.url
        });
      }
    });
  }

  onCurrencyChange(): void {
    this.getRates();
  }

  convertAmount(rate: number): number {
    return this.amount * rate;
  }
}
