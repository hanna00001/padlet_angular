import {User} from "./user";
export {User} from "./user";

export class Padlet {

  constructor(
    public id: number,
    public name: string,
    public user_id: User,
    public is_public: boolean,
  ) {
  }

}
