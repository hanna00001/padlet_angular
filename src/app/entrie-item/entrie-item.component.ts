import {Component, Input, OnInit} from '@angular/core';
import {Entrie, Padlet} from "../shared/entrie";
import {Rating} from "../shared/rating";
import {Comment} from "../shared/comment";
import {PadletService} from "../shared/padlet.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'div.bs-entrie-item',
  templateUrl: './entrie-item.component.html',
  styles: [
  ]
})
export class EntrieItemComponent implements OnInit{

  @Input() entrie: Entrie | undefined

  ratings: Rating[] = [];
  comments: Comment[] = [];
  username: string = "";

  constructor(
    private ps: PadletService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    const params = this.route.snapshot.params;
    this.ps.getAllRatings(params['id'], this.entrie?.id).subscribe(res=>this.ratings = res);
    this.ps.getAllComments(params['id'], this.entrie?.id).subscribe(res=>this.comments = res);
    this.ps.getUserName(this.entrie?.user_id.toString()).subscribe(res => this.username = res);

  }

  getRating(num:number){
    return new Array(num);
  }

}
