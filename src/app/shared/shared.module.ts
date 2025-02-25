import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import {BuscadorComponent} from './components/buscador/buscador.component';



@NgModule({
  declarations: [

    BuscadorComponent

  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [
    
    BuscadorComponent,
    CommonModule,
    IonicModule,
    FormsModule
  
  ]
}) export class SharedModule { }
