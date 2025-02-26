import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private pokemon = environment.pokeapi.url+environment.pokeapi.pointer.pokemon;
  private tipo = environment.pokeapi.url+environment.pokeapi.pointer.type;
  private habilidad = environment.pokeapi.url+environment.pokeapi.pointer.ability;

  constructor(private http: HttpClient) {}

  public getPokemon(name: any): Observable<any>{

    return this.http.get(`${this.pokemon}${name}`).pipe(
      map((response: any) => {return response}),catchError(e => {
        
        if (e.status === 404) return of(null);
        else return of(null)

      })
    );

  }
  
  public getTipo(name: any): Observable<any>{

    return this.http.get(`${this.tipo}${name}`).pipe(
      map((response: any) => {return response}),catchError(e => {
        
        if (e.status === 404) return of(null);
        else return of(null)

      })
    );

  }
  
  public getHabilidad(name: any): Observable<any>{

    return this.http.get(`${this.habilidad}${name}`).pipe(
      map((response: any) => {return response}),catchError(e => {
        
        if (e.status === 404) return of(null);
        else return of(null)

      })
    );

  }

}
