import {Component, Input, OnInit} from '@angular/core';
import {Rating, User} from "../shared/rating";
import {UserService} from "../shared/user.service";
import {UserFactory} from "../shared/user-factory";
import {RatingFactory} from "../shared/rating-factory";

@Component({
  selector: 'div.bs-rating-item',
  templateUrl: './rating-item.component.html',
  styles: [
  ]
})
export class RatingItemComponent implements OnInit{

  @Input() rating: Rating | undefined

  user: User = UserFactory.empty();


  constructor(
    private us: UserService,
  ) {
  }

  getRating(num:number | undefined){
    return new Array(num);
  }

  ngOnInit() {
    if(this.rating) {
      this.us.getSingleUser(this.rating.user_id).subscribe((u:User)=> this.user = u);
    }
  }

}
