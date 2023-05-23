import {Entrie, User} from "./entrie";

export class EntrieFactory {

  static empty(): Entrie{
    return new Entrie(0,1,new User(0,'','','','',''),1,'','', [],[], '');
  }

  static fromObject(rawEntrie: any): Entrie{
    return new Entrie(
      rawEntrie.id,
      rawEntrie.user_id,
      rawEntrie.user,
      rawEntrie.padlet_id,
      rawEntrie.title,
      rawEntrie.content,
      rawEntrie.ratings,
      rawEntrie.comments,
      rawEntrie.created_at
    )
  }
}
