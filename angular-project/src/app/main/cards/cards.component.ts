import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/shared/interfaces/posts';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  cats: IPost[] | undefined = undefined

  constructor(private http: HttpClient, private userService: UserService) { }

  ngOnInit(): void {
    this.http.get<IPost[]>('/api/themes/home').subscribe(data => {
      this.cats = data
    })
  }

  get user() {
    return this.userService.user
  }

  get ifAnyCats() {
    return this.cats?.length !== 0
  }

}
