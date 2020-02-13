import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas

import { APP_ROUTING } from './app.routes';

// Componentes

import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { BlogComponent } from './components/blog/blog.component';
import { CotizadorComponent } from './components/cotizador/cotizador.component';
import { EntradaComponent } from './components/blog/entrada/entrada.component';
import { EntradasComponent } from './components/blog/entradas/entradas.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { NavHeaderComponent } from './components/shared/nav-header/nav-header.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ServiciosComponent,
    BlogComponent,
    CotizadorComponent,
    EntradaComponent,
    EntradasComponent,
    TiendaComponent,
    FooterComponent,
    HeaderComponent,
    NavHeaderComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
