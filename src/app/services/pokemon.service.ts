import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private baseURL: string = "";

  constructor() {
    this.baseURL = environment.pokeApi;
  }

  getPokemon(pokemonName: string) {
    console.log(this.baseURL);
  }
}
