import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { IUser } from '../shared/interfaces/user';
import { BehaviorSubject, Subscription, tap } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnDestroy {

  private user$$ = new BehaviorSubject<undefined | IUser>(undefined);
  user$ = this.user$$.asObservable()

  user: IUser | undefined = undefined;

  subscription: Subscription;

  constructor(private http: HttpClient) {
    this.subscription = this.user$.subscribe(user => {
      this.user = user
    });
  }


  register(username: string, email: string, password: string, rePassword: string, phone?: string) {
    return this.http.post<IUser>('/api/register', { username, email, password, rePassword, tel: phone }).pipe(tap(user => this.user$$.next(user)));
  }


  login(email: string, password: string) {
    return this.http.post<IUser>(`/api/login`, { email, password }).pipe(tap(user => this.user$$.next(user)));
  }


  getUser() {
    return this.http.get<IUser>('/api/users/profile').pipe(tap(user => this.user$$.next(user)));
  }

  

  editUser(username: string, email: string, phone?: string) {
    return this.http.put<IUser>('/api/users/profile', { username, email, tel: phone }).pipe(tap(user => this.user$$.next(user)));
  }


  logout() {
    return this.http.post<IUser>('/api/logout', {}).pipe(tap(() => this.user$$.next(undefined)))
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }


}
