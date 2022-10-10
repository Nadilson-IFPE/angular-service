import { PokemonService } from '../../services/pokemon.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  name: string = "CHARIZARD";
  attributesTypes: string[] = ['FIRE', 'ROCK'];

  constructor(private service: PokemonService ) { }

  ngOnInit(): void {
    this.service.getPokemon("charizard").subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log(err)
    });
  }

}
