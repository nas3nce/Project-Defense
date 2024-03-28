import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { FormBuilder, Validators } from '@angular/forms';
import { emailValidator } from 'src/app/shared/validators/email-validator';
import { passwordMatch } from 'src/app/shared/validators/passwordMatch-validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private userService: UserService, private fb: FormBuilder, private router: Router) { }

  passwordsHidden = true;

  togglePassVisibility() {
    this.passwordsHidden = !this.passwordsHidden
  }


  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(50)]],
    email: ['', [Validators.required, emailValidator()]],
    pass: this.fb.group({
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(50)]],
      rePassword: ['', [Validators.required]]
    }, { validators: passwordMatch() }
    ),
    phone: ['']
  })


  registerHandler() {
    if (this.form.invalid) { return }

    const { username, email, pass: { password, rePassword } = {}, phone } = this.form.value

    this.userService.register(username!, email!, password!, rePassword!, phone!).subscribe(user => {
      this.userService.user = user
      this.router.navigate(['cats/catalog'])
    })
  }


}
