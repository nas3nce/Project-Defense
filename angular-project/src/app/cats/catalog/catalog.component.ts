import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/shared/interfaces/posts';
import { CatService } from '../cat.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  cats: IPost[] | undefined 

  constructor(private postService: CatService) { }


  ngOnInit(): void {
    this.postService.getAllPosts().subscribe(data => {
      this.cats = data
    })
  }

    
  get ifAnyCats () {
    return this.cats?.length !== 0 
  }


}
