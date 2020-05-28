import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { GridComponent } from './components/grid/grid.component';


const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'grid', component: GridComponent },
  //{ path: '', pathMatch: 'full', redirectTo: 'home' }, // Pagina de inicio
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot( ROUTES ) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
