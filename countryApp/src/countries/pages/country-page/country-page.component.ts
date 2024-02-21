import { Component, OnInit } from '@angular/core'; 
import { ActivatedRoute, Router } from '@angular/router'; 
import { CountryService } from '../../services/country.service';
import { switchMap } from 'rxjs'; 
import { Country } from '../../interfaces/country';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-country-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent {

  constructor(private activatedRoute: ActivatedRoute, private countryService: CountryService, private router: Router) { }

  //Propiedades
  country: Country | undefined;

  //Busca el país en la API a través de la función del servicio y la id extraída del parámetro de la ruta
  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ ccn3 }) => this.countryService.searchCountryByAlphaCode(ccn3
        )),
      ).subscribe(country => {
        if (!country) return this.router.navigateByUrl('');
        return this.country = country;
      });
  }
}
