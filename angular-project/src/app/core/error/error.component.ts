import { Component, OnDestroy, OnInit } from '@angular/core';
import { ErrorService } from './error.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent {

  errMessage = ''

  constructor(private errorService: ErrorService, private router: Router) {

    this.errorService.apiError$.subscribe((err: any) => {
      if (err.status == 500) return this.errMessage = 'Page Not Found'
      if (err.status === 401) return this.errMessage = 'Wrong Email or Password'

      return this.errMessage = err?.message || ''
    })
  }


}