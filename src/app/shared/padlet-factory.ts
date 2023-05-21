import {Padlet, User} from "./padlet";

export class PadletFactory {

  static empty(): Padlet{
    return new Padlet(0,'',1,true);
  }

  static fromObject(rawPadlet: any): Padlet{
    return new Padlet(
      rawPadlet.id,
      rawPadlet.name,
      rawPadlet.user_id,
      rawPadlet.is_public
    )
  }

}
