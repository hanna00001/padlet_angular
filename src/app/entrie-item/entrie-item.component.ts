import {Component, OnInit} from '@angular/core';
import {Entrie} from "../shared/entrie";
import {Rating} from "../shared/rating";
import {Comment} from "../shared/comment";

@Component({
  selector: 'bs-entrie-item',
  templateUrl: './entrie-item.component.html',
  styles: [
  ]
})
export class EntrieItemComponent implements OnInit{

  ratings: Rating[] = [];
  comment: Comment[] = [];

  ngOnInit() {


  }

}
