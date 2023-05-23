import {User} from "./user";
import {Entrie} from "./entrie";
export {User} from "./user";
export {Entrie} from "./entrie";

export class Comment {

  constructor(
    public id: number,
    public user_id: number,
    public user: User,
    public entrie_id: number | undefined,
    public comment: string
  ) {
  }
}
