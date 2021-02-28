import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.state';

@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.scss']
})
export class Error404Component implements OnInit {

  deviceXs: boolean = false;
  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {

    this.store.select('device').subscribe(res => {
      this.deviceXs = res;
    });

  }

}
