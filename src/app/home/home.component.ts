import { Component } from '@angular/core';
import { FlightScheduleComponent } from './flight-schedule/flight-schedule.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FlightScheduleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
