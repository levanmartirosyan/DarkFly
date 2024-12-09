import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(public http: HttpClient) {}

  getFlightSchedule() {
    return this.http.get(
      'https://gateway.tkt.ge/v1/amadeus/flightsSchedule?location=Tbilisi&api_key=7d8d34d1-e9af-4897-9f0f-5c36c179be77'
    );
  }
}