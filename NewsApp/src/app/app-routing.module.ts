import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { ReadMoreComponent } from './read-more/read-more.component';


const routes: Routes = [ 
  {path: '', redirectTo: '/home',  pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  { path: 'read-more', component:ReadMoreComponent },
{path: 'app', component:AppComponent}
  
];

@NgModule({
imports: [RouterModule.forRoot(routes,
  { enableTracing: true })],
exports: [RouterModule]
})
export class AppRoutingModule {
 
 }
