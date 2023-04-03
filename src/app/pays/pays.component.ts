import { Component, OnInit } from '@angular/core';
import { PaysService } from '../pays.service';

@Component({
  selector: 'app-pays',
  templateUrl: './pays.component.html',
  styleUrls: ['./pays.component.css']
})
export class PaysComponent implements OnInit {
  countries: any[] = [];
  filteredCountries: any[] = [];

  constructor(private countryService: PaysService) { }

  ngOnInit(): void {
    this.loadCountries();
  }

  loadCountries(): void {
    this.countryService.getCountries().subscribe(
      (data) => {
        this.countries = data;
        this.filteredCountries = [...this.countries];
        this.sortCountriesAlphabetically();
      },
      (error) => {
        console.error('Erreur lors de la récupération des données:', error);
      }
    );
  }

  objectKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  isLast(arr: any[], item: any): boolean {
    return arr[arr.length - 1] === item;
  }

  sortCountriesAlphabetically(): void {
    this.countries.sort((a, b) => a.name.common.localeCompare(b.name.common));
  }

  filterEuropeanCountries(): void {
    this.filteredCountries = this.countries.filter(
      (country) => country.region === 'Europe'
    );
  }
}
