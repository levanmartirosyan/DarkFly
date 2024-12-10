import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(public http: HttpClient) {}

  getFlightSchedule(city: any) {
    return this.http.get(
      `https://gateway.tkt.ge/v1/amadeus/flightsSchedule?location=${city}&api_key=7d8d34d1-e9af-4897-9f0f-5c36c179be77`
    );
  }

  authorization(body: any) {
    return this.http.post(
      'https://freeapi.miniprojectideas.com/api/FlightBooking/Login',
      body
    );
  }
  registration(body: any, header: any) {
    return this.http.post(
      'https://freeapi.miniprojectideas.com/api/FlightBooking/Register',
      body,
      {
        headers: header,
      }
    );
  }

  getFlights() {
    return this.http.get(
      'https://freeapi.miniprojectideas.com/api/FlightBooking/GetAllFlights'
    );
  }
}
