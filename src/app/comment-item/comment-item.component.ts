import {Component, Input} from '@angular/core';
import {Comment} from "../shared/comment";

@Component({
  selector: 'div.bs-comment-item',
  templateUrl: './comment-item.component.html',
  styles: [
  ]
})
export class CommentItemComponent {

  @Input() comment: Comment | undefined

  constructor() {}


  ngOnInit() {}
}
