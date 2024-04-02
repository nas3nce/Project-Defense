import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { IUser } from 'src/app/shared/interfaces/user';
import { CatService } from 'src/app/cats/cat.service';
import { IPost } from 'src/app/shared/interfaces/posts';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: IUser | undefined = undefined

  constructor(private userService: UserService, private postService: CatService) { }

  ngOnInit(): void {

    this.userService.getUser().subscribe(data => this.user = data)

  }

}
