import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/shared/interfaces/posts';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  cats: IPost[] | undefined = undefined

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<IPost[]>('/api/themes/home').subscribe(data => {
      this.cats = data
    })
  }

}
