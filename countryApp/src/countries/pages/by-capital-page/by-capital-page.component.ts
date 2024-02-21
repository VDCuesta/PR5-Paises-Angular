import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/country.service';
import { CountryTableComponent } from '../../components/country-table/country-table.component';

@Component({
  selector: 'app-by-capital-page',
  standalone: true,
  imports: [CommonModule, SearchBoxComponent, CountryTableComponent],
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {
  
  countryList: Country[] = [];

  constructor(private countryService: CountryService){}

  //Llama a la función de busqueda pasandole el valor del input de la barra buscadora
  processSearch (search: string){
    // console.log(search);
    this.searchCountryByCapital(search);
  }

  //Busca en la API llamando a nuestra función del servicio y guarda el resultado en countryList
  searchCountryByCapital(capital: string){
    this.countryService.searchByCapital(capital).subscribe(country => this.countryList = country);
  }
}
