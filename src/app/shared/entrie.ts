import {User} from "./user";
import {Padlet} from "./padlet";
export {User} from "./user";
export {Padlet} from "./padlet";

export class Entrie {

  constructor(
    public id: number,
    public user_id: User,
    public padlet_id: number,
    public title: string,
    public content: string
  ) {
  }
}
