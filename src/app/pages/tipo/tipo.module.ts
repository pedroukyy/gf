import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { TipoPageRoutingModule } from './tipo-routing.module';
import { TipoPage } from './tipo.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    SharedModule,
    TipoPageRoutingModule,
	RouterModule.forChild([{ path: '', component: TipoPage }])
  ],
  declarations: [TipoPage]
})
export class TipoPageModule {}
