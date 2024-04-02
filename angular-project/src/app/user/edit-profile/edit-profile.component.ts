import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { emailValidator } from 'src/app/shared/validators/email-validator';
import { IUser } from 'src/app/shared/interfaces/user';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {

  user: IUser | undefined

  constructor(private userService: UserService, private fb: FormBuilder, private router: Router) {
    
    this.userService.getUser().subscribe(data => {
      this.user = data
      this.user.tel ? this.user.tel : this.user.tel = ''

      this.form.setValue({
        username: this.user.username,
        email: this.user.email,
        phone: this.user.tel
      })
    })
  }


  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(50)]],
    email: ['', [Validators.required, emailValidator()]],
    phone: ['']
  })


  editHandler() {
    if (this.form.invalid) { return }

    const { username, email, phone } = this.form.value

    this.userService.editUser(username!, email!, phone!).subscribe()

    this.router.navigate(['/user/profile'])
  }


}
