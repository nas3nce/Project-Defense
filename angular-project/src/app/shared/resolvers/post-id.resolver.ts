import { Injectable } from "@angular/core";
import {  ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";
import { Resolve } from "@angular/router";
import { Observable } from "rxjs";
import { CatService } from "src/app/cats/cat.service";
import { IPost } from "../interfaces/posts";



// @Injectable({
//     providedIn: 'root'
// })

// export class PostIdResolver implements Resolve<IPost | null> {

//     constructor(private postService: CatService, private router: Router) { }

//     resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IPost | null | Observable<IPost | null> {
//         const details = route.params['details'];

//         if (!details) {
//             this.router.navigate(['not-found'])
//             return null
//         }

//         return this.postService.getSinglePost(details)
//     }
// }
