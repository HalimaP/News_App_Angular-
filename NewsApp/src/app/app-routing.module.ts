import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { ReadMoreComponent } from './home/read-more/read-more.component';


const routes: Routes = [
  {path: '', redirectTo: '/home',  pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path:'home/read-more/:id', component: ReadMoreComponent},
];

@NgModule({
imports: [RouterModule.forRoot(routes,
  { enableTracing: true })],
exports: [RouterModule]
})
export class AppRoutingModule {

 }
