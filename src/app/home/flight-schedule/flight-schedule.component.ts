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
    this.getFlightSchedule();
  }

  public chooseSchedule: string = 'departure';
  public flightSchedule: any;
  public flight: any;

  getFlightSchedule() {
    this.apiService.getFlightSchedule().subscribe({
      next: (data: any) => {
        console.log(data);
        this.flightSchedule = data.Data;
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
}
