import { PokemonService } from '../../services/pokemon.service';
import { Component, OnInit } from '@angular/core';
import { PokemonData } from 'src/app/models/pokemonData';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  pokemon: PokemonData | any;
  name: string = "CHARIZARD";
  attributesTypes: string[] = ['FIRE', 'ROCK'];

  constructor(private service: PokemonService ) { }

  ngOnInit(): void {
    this.service.getPokemon("charizard").subscribe({
      next: (res) => {

        this.pokemon = {
          id: res.id,
          name: res.name,
          sprites: res.sprites,
          types: res.types
        }
        console.log(res);
        console.log(this.pokemon);
      },
      error: (err) => console.log(err)
    });
  }

}
