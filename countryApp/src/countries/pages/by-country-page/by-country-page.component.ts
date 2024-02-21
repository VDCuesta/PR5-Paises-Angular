import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/country.service';
import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';
import { CountryTableComponent } from '../../components/country-table/country-table.component';

@Component({
  selector: 'app-by-country-page',
  standalone: true,
  imports: [CommonModule, SearchBoxComponent, CountryTableComponent],
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {
  countryList: Country[] = [];

  constructor(private countryService: CountryService){}

  //Llama a la función de busqueda pasandole el valor del input de la barra buscadora
  processSearch (search: string){
    this.searchCountryByName(search);
  }

  //Busca en la API llamando a nuestra función del servicio y guarda el resultado en countryList
  searchCountryByName(name: string){
    this.countryService.searchByCountry(name).subscribe(country => this.countryList = country);
  }
}
