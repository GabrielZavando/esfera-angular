import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas

import { APP_ROUTING } from './app.routes';

// Componentes

import { AppComponent } from './app.component';
import { InicioComponent } from './components/paginas/inicio/inicio.component';
import { ServiciosComponent } from './components/paginas/servicios/servicios.component';
import { BlogComponent } from './components/paginas/blog/blog.component';
import { CotizadorComponent } from './components/paginas/cotizador/cotizador.component';
import { EntradaComponent } from './components/paginas/blog/entrada/entrada.component';
import { EntradasComponent } from './components/paginas/blog/entradas/entradas.component';
import { TiendaComponent } from './components/paginas/tienda/tienda.component';
import { FooterComponent } from './components/secciones/footer/footer.component';
import { HeaderComponent } from './components/secciones/header/header.component';
import { NavHeaderComponent } from './components/elementos/nav-header/nav-header.component';
import { OfertasComponent } from './components/elementos/ofertas/ofertas.component';
import { SliderComponent } from './components/elementos/slider/slider.component';
import { PortafolioComponent } from './components/elementos/portafolio/portafolio.component';
import { NosotrosComponent } from './components/elementos/nosotros/nosotros.component';


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
    NavHeaderComponent,
    OfertasComponent,
    SliderComponent,
    PortafolioComponent,
    NosotrosComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
