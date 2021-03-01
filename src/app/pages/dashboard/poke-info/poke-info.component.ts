import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

// Store
import { Store } from '@ngrx/store';
import { AppState } from './../../../app.state';

@Component({
  selector: 'app-poke-info',
  templateUrl: './poke-info.component.html',
  styleUrls: ['./poke-info.component.scss']
})
export class PokeInfoComponent implements OnInit {

  pokeId: Observable<string>;
  id: string;
  uri: string;
  deviceXs: boolean = false;

  constructor(
    private store: Store<AppState>,
  ) {
    this.pokeId = this.store.select('pokeSelected');
   }

  ngOnInit(): void {
    this.pokeId.subscribe( res => {
      this.id = res;
      this.uri = environment.pokeImage  + this.completImgId(res);
    })

    this.store.select('device').subscribe(res => {
      this.deviceXs = res;
    });
  }


  completImgId(text: string): string {
    let value: string;
    if (text.length === 1){
      value = '00' + text;
    } else if ( text.length === 2){
      value = '0' + text;
    }
    return value;
  }
}
