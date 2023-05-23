import {Comment, User} from "./comment";

export class CommentFactory {

  static empty(): Comment{
    return new Comment(0,1,new User(0,'','','','',''),1,'');
  }

  static fromObject(rawComment: any): Comment{
    return new Comment(
      rawComment.id,
      rawComment.user_id,
      rawComment.user,
      rawComment.entrie_id,
      rawComment.comment
    )
  }

}
