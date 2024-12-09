import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { error } from 'console';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-flight-schedule',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flight-schedule.component.html',
  styleUrl: './flight-schedule.component.scss',
})
export class FlightScheduleComponent implements OnInit {
  constructor(public apiService: ApiService) {}

  ngOnInit(): void {
    this.getFlightSchedule('Tbilisi');
  }

  public chooseSchedule: string = 'departure';
  public flightSchedule: any;
  public flight: any;
  public savedCity: any;

  getFlightSchedule(city: any) {
    this.savedCity = city;
    this.apiService.getFlightSchedule(city).subscribe({
      next: (data: any) => {
        this.flightSchedule = data.Data;
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }

  public airports: any;
  openAirports() {
    this.airports = this.airports === 'list' ? null : 'list';
  }
}
