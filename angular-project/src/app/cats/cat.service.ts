import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IPost } from '../shared/interfaces/posts';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  constructor(private http: HttpClient, private router: Router) { }

  createPost(themeName: string, breed: string, age: string, image: string, description: string) {
    return this.http.post<IPost>('/api/themes', { themeName, breed, age, image, description })
  }

  getAllPosts() {
    return this.http.get<IPost[]>('/api/themes')
  }

  getSinglePost(id: string) {
    return this.http.get<IPost>(`/api/themes/${id}`)
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

}
