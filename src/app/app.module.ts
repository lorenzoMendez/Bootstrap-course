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
import { OrdenamientoColumnasComponent } from './components/ordenamiento-columnas/ordenamiento-columnas.component';
import { ColumnaAnidadaComponent } from './components/columna-anidada/columna-anidada.component';
import { ResponsiveUtilitiesComponent } from './components/responsive-utilities/responsive-utilities.component';
import { TypographyComponent } from './components/typography/typography.component';
import { ImagesComponent } from './components/images/images.component';
import { TableComponent } from './components/table/table.component';

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
    OffsetingComponent,
    OrdenamientoColumnasComponent,
    ColumnaAnidadaComponent,
    ResponsiveUtilitiesComponent,
    TypographyComponent,
    ImagesComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
