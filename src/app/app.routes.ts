import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ServiciosComponent } from './components/servicios/servicios.component';

const APP_ROUTES: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'servicios', component: ServiciosComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'inicio'}
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES)
