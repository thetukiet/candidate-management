import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { TuiAlertService } from '@taiga-ui/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  model: any = {};

  constructor(private authService: AuthService,
    private router: Router,
    private alertService: TuiAlertService) {

  }

  onSubmit() {
    this.authService.login(this.model.username, this.model.password).subscribe(
      (response) => {
        console.log('Login successful', response);
        this.router.navigate(['/']); // Navigate to the home page
      },
      (error) => {
        this.alertService.open('Login failed. Please check your credentials and try again.', {
          label: 'Login Error',
          status: 'error',
        }).subscribe();
      }
    );
  }
}