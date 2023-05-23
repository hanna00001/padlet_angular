import {Component, Input} from '@angular/core';
import {Comment, User} from "../shared/comment";
import {UserService} from "../shared/user.service";
import {UserFactory} from "../shared/user-factory";

@Component({
  selector: 'div.bs-comment-item',
  templateUrl: './comment-item.component.html',
  styles: [
  ]
})
export class CommentItemComponent {

  @Input() comment: Comment | undefined
  user: User = UserFactory.empty();


  constructor(
    private us : UserService
  ) {
  }


  ngOnInit() {
    this.us.getSingleUser(this.comment?.user_id).subscribe((u:User)=> this.user = u);
  }
}
