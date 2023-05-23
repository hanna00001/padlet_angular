import {Component, Input, OnInit} from '@angular/core';
import {Rating} from "../shared/rating";

@Component({
  selector: 'div.bs-rating-item',
  templateUrl: './rating-item.component.html',
  styles: [
  ]
})
export class RatingItemComponent implements OnInit{

  @Input() rating: Rating | undefined

  constructor() {}

  getRating(num:number | undefined){
    return new Array(num);
  }

  ngOnInit() {}

}
