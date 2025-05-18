import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      username: this.fb.control(''),
      password: this.fb.control(''),
    });
  }

  handleLogin(): void {
    if (this.formLogin.valid) {
      const { username, password } = this.formLogin.value;
      this.authService.login(username, password).subscribe({
        next: (response) => {
          this.authService.loadProfile(response);
          this.router.navigate(['/admin']);
        },
        error: (error) => {
          console.error('Login failed:', error);
        },
      });
    }
  }
}
