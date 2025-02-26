import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [

    BuscadorComponent,
	PokemonComponent,
	HeaderComponent

  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [
    
    BuscadorComponent,
	PokemonComponent,
	HeaderComponent,
    CommonModule,
    IonicModule,
    FormsModule
  
  ]
}) export class SharedModule { }
