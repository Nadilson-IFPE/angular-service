import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private baseURL: string = "";
  private pokeData: any;

  constructor(private http: HttpClient) {
    this.baseURL = environment.pokeApi;
  }

  getPokemon(pokemonName: string) {
    this.pokeData = this.http.get(`${this.baseURL}/${pokemonName}`);
    console.log(this.pokeData);
  }
}
