import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { IUser } from "src/app/shared/interfaces/user";
import { UserService } from "src/app/user/user.service";

@Injectable({ providedIn: 'root' })

export class GuestGuard implements CanActivate {

    user: IUser | undefined

    constructor(private userService: UserService, private router: Router) {
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot):
        boolean
        | UrlTree
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree> {

        this.user = this.userService.user

        if (!this.user) this.router.navigate(['user/login'])
        return !!this.user
    }
}