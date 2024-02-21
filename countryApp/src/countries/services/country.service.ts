import { Injectable } from '@angular/core';
import { Country } from '../interfaces/country';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  //Propiedad con la url base de la API
  private apiURL = 'https://restcountries.com/v3.1';

  constructor(private httpClient: HttpClient) { }

  //Completa la url con el nombre del país y devuelve un array de objetos Country
  searchByCountry(country: string):Observable<Country[]> {
    const url = `${this.apiURL}/name/${country}`;
    
    return this.httpClient.get<Country[]>(url)
          .pipe( 
            catchError(error => of([]))
          );
  }

  //Completa la url con el nombre de la capital del país y devuelve un array de objetos Country
  searchByCapital(capital: string):Observable<Country[]> {
    const url = `${this.apiURL}/capital/${capital}`;

    return this.httpClient.get<Country[]>(url)
          .pipe( 
            catchError(error => of([]))
          );
  }

  //Completa la url con el nombre de una región y devuelve un array de objetos Country
  searchByRegion(region: string):Observable<Country[]> {
    const url = `${this.apiURL}/region/${region}`;

    return this.httpClient.get<Country[]>(url)
          .pipe( 
            catchError(error => of([]))
          );
  }

  //Completa la url con el nombre del país y devuelve un objeto Country o null
  searchCountryByAlphaCode( code: string ): Observable<Country | null> { 
    const url = `${ this.apiURL }/alpha/${ code }`; 

    return this.httpClient.get<Country[]>( url ) 
          .pipe( 
            map( 
    countries => countries.length > 0 ? countries[0]: null ), 
            catchError( () => of(null) ) 
          ); 
  } 

}

