import { Component } from '@angular/core';
import { FlightScheduleComponent } from './flight-schedule/flight-schedule.component';
import { TopComponent } from './top/top.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FlightScheduleComponent, TopComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
