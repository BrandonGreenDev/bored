import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdviceComponent } from './components/advice.component';
import { InsultComponent } from './components/insult.component';
import { FactsComponent } from './components/facts.component';
import { PokemonComponent } from './components/pokemon.component';
import { CurrencyComponent } from './components/currency.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AdviceComponent,
    InsultComponent,
    FactsComponent,
    PokemonComponent,
    CurrencyComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Bored App';
  currentYear = new Date().getFullYear();
}
