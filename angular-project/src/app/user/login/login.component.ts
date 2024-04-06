import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { emailValidator } from 'src/app/shared/validators/email-validator';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { IUser } from 'src/app/shared/interfaces/user';
import { ErrorService } from 'src/app/core/error/error.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  passwordsHidden = true;

  togglePassVisibility() {
    this.passwordsHidden = !this.passwordsHidden
  }

  constructor(
    private errorService: ErrorService,
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) { }


  form = this.fb.group({
    email: ['', [Validators.required, emailValidator()]],
    password: ['', [Validators.required]]
  })


  loginHandler() {
    if (this.form.invalid) return
    const { email, password } = this.form.value;

    this.userService.login(email!, password!).subscribe(user => {
      this.userService.user = user;
      this.router.navigate(['cats/catalog'])
    });

    this.errorService.setError('')
  }

}
