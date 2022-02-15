import { Component, OnInit } from '@angular/core';
import { Country } from '../model/Country';
import { CountryService } from "../service/Country.service";


@Component({
  selector: 'app-country-drop-down',
  templateUrl: './country-drop-down.component.html',
  styleUrls: ['./country-drop-down.component.css']
})
export class CountryDropDownComponent implements OnInit {

  countries: Country[];

  constructor(private countryService: CountryService) {
  }

  ngOnInit() {
    this.countryService.findAll().subscribe(data => {
      this.countries = data;
      console.log("data countries "+this.countries);
    });
  }



}
