import { Component, OnInit } from '@angular/core';
import { CatService } from '../cat.service';
import { IPost } from 'src/app/shared/interfaces/posts';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cat-details',
  templateUrl: './cat-details.component.html',
  styleUrls: ['./cat-details.component.css']
})
export class CatDetailsComponent implements OnInit {

  cat: IPost | undefined = undefined

  constructor(private postService: CatService, private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    const { details } = this.route.snapshot.params

    this.postService.getSinglePost(details).subscribe(data => this.cat = data);
  }

  likeHandler() {
    const { details } = this.route.snapshot.params

    this.postService.likePost(details).subscribe(data => {
      this.cat!.subscribers = data.subscribers
    });
  }

  deleteHandler() {
    const { details } = this.route.snapshot.params

    this.postService.deletePost(details).subscribe();
  }


  commentHandler(form: NgForm) {
    console.log(form.value);
    

  }

  get IfAlreadyLiked() {
    const userId = this.userService.user?._id
    return this.cat?.subscribers.some(id => id == userId)
  }

  get isOwner() {
    const userId = this.userService.user?._id
    return this.cat?.userId == userId
  }

  get isUser() {
    return this.userService.user
  }

}
