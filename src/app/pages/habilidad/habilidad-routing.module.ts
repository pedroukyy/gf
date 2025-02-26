import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HabilidadPage } from './habilidad.page';

const routes: Routes = [
  {
    path: '',
    component: HabilidadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HabilidadPageRoutingModule {}
