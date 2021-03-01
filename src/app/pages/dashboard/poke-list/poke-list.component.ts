import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { NgxSpinnerService } from 'ngx-spinner';

// Models
import { PokeInfo } from '../../../models/PokeInfo';

// Store
import { Store } from '@ngrx/store';
import { AppState } from './../../../app.state';
import * as PSActions from '../actions/pokeSelected.actions';

// Services
import { PokemonInfoService } from '../../services/pokemon-info.service'; 

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  pokeData: Observable<PokeInfo[]>;
  pokeList: PokeInfo[] = [];
  img:string = environment.pokeSprite;
  deviceXs: boolean = false;
  selector: string = '.poke-list';

  constructor(
    private store: Store<AppState>,
    private spinner: NgxSpinnerService,
    private _pokeInfoService: PokemonInfoService
  ) {
      this.pokeData = store.select('pokeList');
    }

  ngOnInit(): void {
    // Get poke data
    this.pokeData.subscribe(res =>{
      this.pokeList = res;
    });

    this.store.select('device').subscribe(res => {
      this.deviceXs = res;
    });
  }

  pokemonSelected(id: string){
    this.store.dispatch( new PSActions.SetPokemon(id) );
  }

  onScroll(){
    this.spinner.show();
    this._pokeInfoService.getPokeList( this.pokeList.length );
    this.spinner.hide();
  }

}
