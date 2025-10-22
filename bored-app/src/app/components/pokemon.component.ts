import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService, Pokemon } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent {
  pokemon: Pokemon | null = null;
  loading: boolean = false;
  error: string = '';

  constructor(private pokemonService: PokemonService) {
    this.getRandomPokemon();
  }

  getRandomPokemon(): void {
    this.loading = true;
    this.error = '';
    this.pokemonService.getRandomPokemon().subscribe({
      next: (pokemon) => {
        this.pokemon = pokemon;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to fetch Pokemon. Please try again.';
        this.loading = false;
        console.error(err);
      }
    });
  }

  getTypeColor(type: string): string {
    const colors: { [key: string]: string } = {
      normal: '#A8A878',
      fire: '#F08030',
      water: '#6890F0',
      electric: '#F8D030',
      grass: '#78C850',
      ice: '#98D8D8',
      fighting: '#C03028',
      poison: '#A040A0',
      ground: '#E0C068',
      flying: '#A890F0',
      psychic: '#F85888',
      bug: '#A8B820',
      rock: '#B8A038',
      ghost: '#705898',
      dragon: '#7038F8',
      dark: '#705848',
      steel: '#B8B8D0',
      fairy: '#EE99AC'
    };
    return colors[type] || '#68A090';
  }
}
