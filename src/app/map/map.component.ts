import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.css',
})
export class MapComponent {
  @Output() selectedCountry = new EventEmitter<string>();

  ngOnInit() {}

  selectCountry(event: any) {
    const name: string = event.target.attributes[3].value;
    this.selectedCountry.emit(name);
  }
}
