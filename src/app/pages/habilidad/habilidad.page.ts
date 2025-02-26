import { Component, OnInit } from '@angular/core';
import { ApiService } from '@services/api.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-habilidad',
  templateUrl: './habilidad.page.html',
  styleUrls: ['./habilidad.page.scss'],
  standalone: false
})
export class HabilidadPage implements OnInit {

  ability: any;
  pokemonList: any[] = [];
  errorMessage: string | null = null;
  isLoading = true;
  englishEffect: string = '';

  constructor(
    private http: ApiService,
    private route: ActivatedRoute,
    private loadingCtrl: LoadingController
  ) {}

  async ngOnInit() {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    
    try {
      const abilityName = this.route.snapshot.paramMap.get('name');
      if (!abilityName) throw new Error('Nombre de habilidad no especificado');

      const abilityResponse = await firstValueFrom(this.http.getHabilidad(abilityName));
      this.ability = abilityResponse;
      this.processAbilityData();
      await this.loadPokemonData();
      
    } catch (error) {
		
    } finally {
      await loading.dismiss();
      this.isLoading = false;
    }
  }

  private processAbilityData() {
	  
    this.englishEffect = this.ability.effect_entries.find(
      (entry: any) => entry.language.name === 'en'
    )?.effect || 'Descripción no disponible';

    this.ability.short_effect = this.ability.effect_entries.find(
      (entry: any) => entry.language.name === 'en'
    )?.short_effect || 'Descripción corta no disponible';
  }

  private async loadPokemonData() {
    try {
      const requests = this.ability.pokemon.slice(0, 20).map((p: any) => 
        firstValueFrom(this.http.getPokemon(p.pokemon.name))
      );
      
      this.pokemonList = await Promise.all(requests);
    } catch (error) {
      console.error('Error cargando Pokémon:', error);
      this.errorMessage = 'Error al cargar algunos Pokémon';
    }
  }
}
