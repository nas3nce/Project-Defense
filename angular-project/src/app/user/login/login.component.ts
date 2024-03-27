import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { emailValidator } from 'src/app/shared/validators/email-validator';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { }


  form = this.fb.group({
    email: ['', [Validators.required, emailValidator()]],
    password: ['', [Validators.required]]
  })


  loginHandler() {
    const { email, password } = this.form.value;

    this.userService.login(email!, password!).subscribe(user => {
      this.userService.user = user;
      this.router.navigate(['/catalog'])
    })
  }
  
  
}
