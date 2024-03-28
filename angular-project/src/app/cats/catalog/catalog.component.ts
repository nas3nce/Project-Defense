import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/shared/interfaces/posts';
import { CatService } from '../cat.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  posts: IPost[] | null = null

  constructor(private postService: CatService) { }


  ngOnInit(): void {
    this.postService.getAllPosts().subscribe(data => {
      this.posts = data
    })

  }

}
