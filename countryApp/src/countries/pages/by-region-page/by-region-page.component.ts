import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component'; 
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/country.service';
import { CountryTableComponent } from '../../components/country-table/country-table.component';

@Component({
  selector: 'app-by-region-page',
  standalone: true,
  imports: [CommonModule, SearchBoxComponent, CountryTableComponent],
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {
  countryList: Country[] = [];

  constructor(private countryService: CountryService){}

  //Llama a la función de busqueda pasandole el valor del input de la barra buscadora
  processSearch (search: string){
    this.searchCountryByRegion(search);
  }

  //Busca en la API llamando a nuestra función del servicio y guarda el resultado en countryList
  searchCountryByRegion(region: string){
    this.countryService.searchByRegion(region).subscribe(country => this.countryList = country);
  }
}
