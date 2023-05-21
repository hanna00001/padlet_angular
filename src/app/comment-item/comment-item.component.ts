import {Component, Input} from '@angular/core';
import {PadletService} from "../shared/padlet.service";
import {Comment} from "../shared/comment";

@Component({
  selector: 'div.bs-comment-item',
  templateUrl: './comment-item.component.html',
  styles: [
  ]
})
export class CommentItemComponent {

  @Input() comment: Comment | undefined
  username : string = "";
  userimage : string = "";

  constructor(
    private ps : PadletService
  ) {
  }


  ngOnInit() {
    this.ps.getUserName(this.comment?.user_id.toString()).subscribe(res => this.username = res);
    this.ps.getUserImage(this.comment?.user_id.toString()).subscribe(res => this.userimage = res);

  }
}
