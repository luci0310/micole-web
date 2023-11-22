import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './modules/inicio/pages/pages.component';

const routes: Routes = [
  {
    path: '', component:PagesComponent
  },
  {
    path:'',loadChildren:()=>import('./modules/inicio/inicio.module').then(m=>m.InicioModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
