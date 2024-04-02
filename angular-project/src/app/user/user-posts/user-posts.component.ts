import { Component } from '@angular/core';
import { CatService } from 'src/app/cats/cat.service';
import { IPost } from 'src/app/shared/interfaces/posts';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent {

  cats: IPost[] | undefined

  constructor(private postService: CatService) {
    this.postService.getByUser().subscribe(data => this.cats = data)
  }


  get ifAnyCats() {
    return this.cats?.length !== 0
  }
}
