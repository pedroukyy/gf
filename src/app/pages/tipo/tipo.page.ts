import { Component, OnInit } from '@angular/core';
import { ApiService } from '@services/api.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-tipo',
  templateUrl: './tipo.page.html',
  styleUrls: ['./tipo.page.scss'],
  standalone:false
})
export class TipoPage implements OnInit {
  tipo: any;
  pokemonList: any[] = [];
  isLoading = true;

  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private loadingCtrl: LoadingController
  ) {}

  async ngOnInit() {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    
    try {
      const typeName = this.route.snapshot.paramMap.get('name');
      if (!typeName) throw new Error('Nombre de tipo no especificado');

      const tipoResponse = await firstValueFrom(this.api.getTipo(typeName));
      this.tipo = tipoResponse;
      
      await this.loadPokemonData();
      
    } catch (error) {
      
    } finally {
      await loading.dismiss();
      this.isLoading = false;
    }
  }

  private async loadPokemonData() {
    try {
      const requests = this.tipo.pokemon.slice(0, 20).map((p: any) => 
        firstValueFrom(this.api.getPokemon(p.pokemon.name))
      );
      
      this.pokemonList = await Promise.all(requests);
    } catch (error) {
      console.error('Error cargando Pokémon:', error);
    }
  }

}