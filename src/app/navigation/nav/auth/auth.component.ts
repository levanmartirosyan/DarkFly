import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { ToolsService } from '../../../services/tools.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent implements OnInit {
  constructor(public apiService: ApiService, public tools: ToolsService) {}

  ngOnInit(): void {}

  @Output() sendCloseCommand: EventEmitter<boolean> = new EventEmitter();

  public authSwitcher: any = 'authorization';

  sendAnswerFromAuth(): void {
    this.sendCloseCommand.emit(false);
  }

  public authorization: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  login() {
    this.apiService.authorization(this.authorization.value).subscribe({
      next: (data: any) => {
        console.log(data);
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }

  public registration: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    mobileNo: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    city: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  register() {
    this.apiService.registration(this.registration.value).subscribe({
      next: (data: any) => {
        console.log(data);
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
}
