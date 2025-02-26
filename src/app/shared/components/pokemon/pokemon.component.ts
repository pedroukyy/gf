import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
  standalone: false
})
export class PokemonComponent  implements OnInit {
  @Input() pokemon: any;

  constructor(private router: Router) { }

  ngOnInit() {}
  
  getTypeColor(type: string): string {
    const colors: { [key: string]: string } = {
      fire: '#FDDFDF',
      grass: '#DEFDE0',
      electric: '#FCF7DE',
      water: '#DEF3FD',
      ground: '#f4e7da',
      rock: '#d5d5d4',
      fairy: '#fceaff',
      poison: '#98d7a5',
      bug: '#f8d5a3',
      dragon: '#97b3e6',
      psychic: '#eaeda1',
      flying: '#F5F5F5',
      fighting: '#E6E0D4',
      normal: '#F5F5F5'
    };
    return colors[type.toLowerCase()] || '#F5F5F5';
  }
  
  navigateToType(typeName: string) {
    this.router.navigate(['/tipo', typeName]);
  }

  navigateToAbility(abilityName: string) {
    this.router.navigate(['/habilidad', abilityName]);
  }

}
