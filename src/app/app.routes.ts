import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/paginas/inicio/inicio.component';
import { ServiciosComponent } from './components/paginas/servicios/servicios.component';
import { CotizadorComponent } from './components/paginas/cotizador/cotizador.component';

const APP_ROUTES: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'servicios', component: ServiciosComponent},
  {path: 'cotiza', component: CotizadorComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'inicio'}
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES)
