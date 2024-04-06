import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { IPost } from '../shared/interfaces/posts';
import { BehaviorSubject, Subscription, filter, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatService implements OnDestroy {

  private cat$$ = new BehaviorSubject<undefined | null | IPost>(undefined);
  cat$ = this.cat$$.asObservable()
    .pipe(filter((val): val is IPost | null => val !== undefined))


  cat: IPost | null = null

  subscription: Subscription;


  constructor(private http: HttpClient, private router: Router) {
    this.subscription = this.cat$
      .subscribe(data => {
        this.cat = data
      })
  }

  createPost(themeName: string, breed: string, age: string, image: string, description: string) {
    return this.http.post<IPost>('/api/themes', { themeName, breed, age, image, description })
  }

  getAllPosts() {
    return this.http.get<IPost[]>('/api/themes')
  }

  getSinglePost(id: string) {
    return this.http.get<IPost>(`/api/themes/${id}`)
      .pipe(tap(data => this.cat$$.next(data)))
  }

  getByUser() {
    return this.http.get<IPost[]>(`/api/themes/byUser`)
  }


  deletePost(id: string) {
    return this.http.delete<IPost>(`/api/themes/${id}`)
  }


  editPost(id: string, themeName: string, breed: string, age: string, image: string, description: string) {
    return this.http.put<IPost>(`/api/themes/${id}/edit`, { themeName, breed, age, image, description })
  }


  likePost(id: string) {
    return this.http.put<IPost>(`/api/themes/${id}/like`, {})
  }

  createComment(id: string, postText: string) {
    return this.http.post<IPost>(`/api/themes/${id}/comment`, { postText })
  }

  search(query: string) {
    return this.http.post<IPost[]>(`/api/themes/search`, { query })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
