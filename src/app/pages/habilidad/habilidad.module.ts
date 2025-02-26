import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { HabilidadPageRoutingModule } from './habilidad-routing.module';
import { HabilidadPage } from './habilidad.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    SharedModule,
    HabilidadPageRoutingModule,
	RouterModule.forChild([{ path: '', component: HabilidadPage }])
  ],
  declarations: [HabilidadPage]
})
export class HabilidadPageModule {}
