import { Component } from '@angular/core';

import { CountryService } from './country.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Interactive Map';
  dataPoints = [];

  constructor(private country: CountryService) {}

  selectedCountryId: string = 'United States';

  selectCountry(id: string) {
    this.country.search(id).subscribe((response: any) => {
      this.dataPoints = response[1];
    });
    console.log(this.dataPoints[0]);
  }
}
