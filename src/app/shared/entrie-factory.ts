import {Entrie} from "./entrie";

export class EntrieFactory {

  static empty(): Entrie{
    return new Entrie(0,1,1,'','');
  }

  static fromObject(rawEntrie: any): Entrie{
    return new Entrie(
      rawEntrie.id,
      rawEntrie.user_id,
      rawEntrie.padlet_id,
      rawEntrie.title,
      rawEntrie.content
    )
  }
}
