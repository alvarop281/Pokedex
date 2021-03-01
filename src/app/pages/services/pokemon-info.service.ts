import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';
import {Router} from '@angular/router';

// Models
import { PokeInfo } from '../../models/PokeInfo';

// Store
import { Store } from '@ngrx/store';
import { AppState } from './../../app.state';
import * as PLActions from '../dashboard/actions/pokeList.actions';

@Injectable({
  providedIn: 'root'
})
export class PokemonInfoService {

  url: string = environment.pokeInfo;
  constructor(
    private _http: HttpClient,
    private store: Store<AppState>,                   // Store
    private router:Router
  ) { }

  getPokeList(offset: number){
    this._http.get(this.url + '?limit=15&offset=' + offset)
        .subscribe(res => {
          this.makePokeList(res['results'])
        },
        err =>{
          this.router.navigate(['404']);
        })
  }

  makePokeList( pokeArray: [] ){

    pokeArray.map(poke => {

      // Create a valid id
      let id: string = poke['url'];
      id = id.slice(34).replace("/", "");

      // Create a valid name
      let name: string = poke['name'];
      name = name.replace("-f", "");
      name = name.replace("-m", "");

      // Create new Pokemon Object
      let pokemon: PokeInfo = {
        name, id,
        url: poke['url']
      }
      
      // Insert pokemon into store
      this.store.dispatch( new PLActions.AddPokeList( pokemon ) );

    })

  }

}
