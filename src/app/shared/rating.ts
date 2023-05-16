import {User} from "./user";
import {Entrie} from "./entrie";
export {User} from "./user";
export {Entrie} from "./entrie";

export class Rating {

  constructor(
    public id: number,
    public user_id: User,
    public entry_id: Entrie,
    public rating: number
  ) {
  }
}
