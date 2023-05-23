import {Rating, User} from "./rating";

export class RatingFactory {

  static empty(): Rating{
    return new Rating(1,new User(0,'','','','',''),1,0);
  }

  static fromObject(rawRating: any): Rating{
    return new Rating(
      rawRating.user_id,
      rawRating.user,
      rawRating.entrie_id,
      rawRating.rating
    )
  }

}
