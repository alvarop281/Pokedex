import { Component, OnInit } from '@angular/core';

import { PokemonInfoService } from '../services/pokemon-info.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private _pokeInfoService: PokemonInfoService
  ) { }

  ngOnInit(): void {
    this._pokeInfoService.getPokeList(0);
  }

}
