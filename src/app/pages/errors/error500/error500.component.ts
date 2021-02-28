import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.state';

@Component({
  selector: 'app-error500',
  templateUrl: './error500.component.html',
  styleUrls: ['./error500.component.scss']
})
export class Error500Component implements OnInit {

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
