import {Comment} from "./comment";

export class CommentFactory {

  static empty(): Comment{
    return new Comment(0,1,1,'');
  }

  static fromObject(rawComment: any): Comment{
    return new Comment(
      rawComment.id,
      rawComment.user_id,
      rawComment.entrie_id,
      rawComment.comment
    )
  }

}
