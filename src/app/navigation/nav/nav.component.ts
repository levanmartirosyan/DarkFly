import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { ToolsService } from '../../services/tools.service';
import { AuthComponent } from './auth/auth.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule, AuthComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent implements OnInit {
  constructor(public apiService: ApiService, public tools: ToolsService) {}

  ngOnInit(): void {}

  public auth: boolean = false;
  public dsjkia: boolean = true;
  openAuthWindow() {
    this.auth = !this.auth;
  }

  getAnswerFromAuth(value: boolean): void {
    this.auth = value;
  }
}
