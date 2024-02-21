import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePageComponent } from '../shared/pages/home-page/home-page.component';
import { AboutPageComponent } from '../shared/pages/about-page/about-page.component';
import { ContactPageComponent } from '../shared/pages/contact-page/contact-page.component';
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomePageComponent, AboutPageComponent, ContactPageComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'countryApp';
}
