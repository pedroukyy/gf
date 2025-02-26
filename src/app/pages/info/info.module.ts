import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { InfoPageRoutingModule } from './info-routing.module';
import { InfoPage } from './info.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    SharedModule,
    InfoPageRoutingModule,
	RouterModule.forChild([{ path: '', component: InfoPage }])
  ],
  declarations: [InfoPage]
})
export class InfoPageModule {}
