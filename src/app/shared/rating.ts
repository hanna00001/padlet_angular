import {User} from "./user";
import {Entrie} from "./entrie";
export {User} from "./user";
export {Entrie} from "./entrie";

export class Rating {

  constructor(
    public id: number,
    public user_id: number,
    public entrie_id: number | undefined,
    public rating: number
  ) {
  }
}
