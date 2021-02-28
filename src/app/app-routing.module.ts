import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { Error404Component } from './pages/errors/error404/error404.component';
import { Error500Component } from './pages/errors/error500/error500.component';

const routes: Routes = [
  { path: '', component: Error404Component },
  // { path: '', component: Error500Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
