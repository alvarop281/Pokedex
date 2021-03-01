import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// HttpClient
import { HttpClientModule } from '@angular/common/http';

// FlexLayout
import { FlexLayoutModule } from '@angular/flex-layout';

// Store 
import { StoreModule } from '@ngrx/store';
import { deviceReducer } from './reducers/device.reducer';
import { PokeListReducer } from './pages/dashboard/reducers/pokeList.reducer';
import { PokeSelectedReducer } from './pages/dashboard/reducers/pokeSelected.reducer';

// Component
import { Error404Component } from './pages/errors/error404/error404.component';
import { Error500Component } from './pages/errors/error500/error500.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PokeInfoComponent } from './pages/dashboard/poke-info/poke-info.component';
import { PokeListComponent } from './pages/dashboard/poke-list/poke-list.component';

// Angular Material
import {ScrollingModule} from '@angular/cdk/scrolling';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
    Error500Component,
    DashboardComponent,
    PokeInfoComponent,
    PokeListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    HttpClientModule,
    StoreModule.forRoot({
      device: deviceReducer,
      pokeList: PokeListReducer,
      PokeSelectedReducer
    }),
    ScrollingModule,
    InfiniteScrollModule,
    NgxSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
