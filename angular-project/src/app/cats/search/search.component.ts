import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CatService } from '../cat.service';
import { IPost } from 'src/app/shared/interfaces/posts';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  noResults = false

  cats: IPost[] | undefined = undefined

  constructor(private postService: CatService) { }

  searchHandle(form: NgForm) {
    if (form.invalid) return
    const { query } = form.value

    this.postService.search(query).subscribe(data => {
      this.cats = data
      this.cats.length > 0 ? this.noResults = false : this.noResults = true
    });


  }

}
