import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private request = environment.pokeapi.url+environment.pokeapi.pointer.pokemon;

  constructor(private http: HttpClient) {}

  public getPokemon(name: any): Observable<any>{
    console.log(`${this.request}${name}`);
    return this.http.get(`${this.request}${name}`).pipe(
      map((response: any) => {return response}),catchError(e => {
        
        if (e.status === 404) return of(null);
        else return of(null)

      })
    );

  }

}
