import {Component, Input, OnInit} from '@angular/core';
import {Rating} from "../shared/rating";
import {PadletService} from "../shared/padlet.service";

@Component({
  selector: 'div.bs-rating-item',
  templateUrl: './rating-item.component.html',
  styles: [
  ]
})
export class RatingItemComponent implements OnInit{

  @Input() rating: Rating | undefined
  username : string = "";

  constructor(
    private ps : PadletService
  ) {
  }

  getRating(num:number | undefined){
    return new Array(num);
  }

  ngOnInit() {
    this.ps.getUserName(this.rating?.user_id.toString()).subscribe(res => this.username = res);
  }

}
