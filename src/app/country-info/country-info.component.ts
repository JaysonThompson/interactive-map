import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-country-info',
  templateUrl: './country-info.component.html',
  styleUrl: './country-info.component.css',
})
export class CountryInfoComponent {
  @Input()
  dataPoints = [];

  constructor() {}

  ngOnInit() {}
}
