import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CatService } from '../cat.service';
import { IPost } from 'src/app/shared/interfaces/posts';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';
import { NgForm } from '@angular/forms';
import { IUser } from 'src/app/shared/interfaces/user';

@Component({
  selector: 'app-cat-details',
  templateUrl: './cat-details.component.html',
  styleUrls: ['./cat-details.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class CatDetailsComponent implements OnInit {

  cat: IPost | undefined = undefined

  user: IUser | undefined = undefined

  constructor(
    private postService: CatService,
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) { }
  

  ngOnInit(): void {
    const { details } = this.route.snapshot.params

    this.postService.getSinglePost(details).subscribe(data => this.cat = data)

    this.user = this.userService.user
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

    this.router.navigate(['/cats/catalog'])
  }

  commentHandler(form: NgForm) {
    if (form.invalid) return
    const { details } = this.route.snapshot.params
    const commentText = form.value.textInput

    this.postService.createComment(details, commentText).subscribe(data => this.cat = data)

    this.postService.getSinglePost(details).subscribe(data => this.cat = data);
    this.postService.getSinglePost(details).subscribe(data => this.cat = data);
    form.resetForm()
  }

  get IfAlreadyLiked() {
    return this.cat?.subscribers.some(id => id == this.user?._id)
  }

  get isOwner() {
    return this.cat?.userId == this.user?._id
  }

  get isUser() {
    return this.user
  }


  eventPrevent(event: MouseEvent) {
    event.preventDefault()
  }

}
