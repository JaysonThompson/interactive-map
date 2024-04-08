import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  constructor(private http: HttpClient) {}

  public search(id: string) {
    return this.http.get(`https://api.worldbank.org/v2/country/${id}`, {
      params: {
        format: 'json',
      },
    });
  }
}
