import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// FlexLayout
import { FlexLayoutModule } from '@angular/flex-layout';

// Store 
import { StoreModule } from '@ngrx/store';
import { deviceReducer } from './reducers/device.reducer';

// Component
import { Error404Component } from './pages/errors/error404/error404.component';
import { Error500Component } from './pages/errors/error500/error500.component';

@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
    Error500Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    StoreModule.forRoot({
      device: deviceReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
