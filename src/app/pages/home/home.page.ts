import { Component, OnInit } from '@angular/core';
import { ApiService } from '@services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false
})
export class HomePage implements OnInit {
  pokemon: any = null;

  constructor(private http: ApiService) { }

  ngOnInit() {
  }

  public goSearchAndFetch(name:string){

    this.http.getPokemon(name).subscribe((response: any) => {


	  this.pokemon = response;

    });

  }

}
