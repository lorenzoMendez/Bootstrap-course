import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { GridComponent } from './components/grid/grid.component';
import { ColumnasAutomaticasComponent } from './components/columnas-automaticas/columnas-automaticas.component';
import { AllinearColumnaVerticalComponent } from './components/alinear-columna-vertical/alinear-columna-vertical.component';
import { AlinearColumnaHorizontalComponent } from './components/alinear-columna-horizontal/alinear-columna-horizontal.component';
import { OffsetingComponent } from './components/offseting/offseting.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PageNotFoundComponent,
    GridComponent,
    ColumnasAutomaticasComponent,
    AllinearColumnaVerticalComponent,
    AlinearColumnaHorizontalComponent,
    OffsetingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
