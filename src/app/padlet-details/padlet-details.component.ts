import {Component, OnInit} from '@angular/core';
import {Padlet} from "../shared/padlet";
import {Entrie} from "../shared/entrie";
import {PadletService} from "../shared/padlet.service";
import {ActivatedRoute, Router} from "@angular/router";
import {PadletFactory} from "../shared/padlet-factory";
import {Rating} from "../shared/rating";
import {AuthenticationService} from "../shared/authentication.service";
import {UserService} from "../shared/user.service";
import {EntrieService} from "../shared/entrie.service";
import {EntrieFactory} from "../shared/entrie-factory";
import {RatingService} from "../shared/rating.service";
import {CommentService} from "../shared/comment.service";

@Component({
  selector: 'bs-padlet-details',
  templateUrl: './padlet-details.component.html',
  styles: [
  ]
})
export class PadletDetailsComponent implements OnInit{

  padlet: Padlet = PadletFactory.empty();
  entries: Entrie[] = [];

  constructor(
    private ps: PadletService,
    private us: UserService,
    private es: EntrieService,
    private rs: RatingService,
    private cs: CommentService,
    private route: ActivatedRoute,
    private router: Router,
    public authService: AuthenticationService)
    {}

  ngOnInit(){
    const params = this.route.snapshot.params;
    this.ps.getSinglePadlet(params['id']).subscribe((p:Padlet) => {
      this.padlet = p;
      this.formatDate();
      this.es.getAllEntries(params['id']).subscribe(res => this.entries = res);
      this.getRatings();
      this.getComments();
    });

  }

  getUserforEntrie(){
    for (let entrie of this.entries){
      this.us.getSingleUser(entrie.user_id).subscribe(res => entrie.user = res)
    }
  }

  getRatings(){
    const params = this.route.snapshot.params;
    for (let entrie of this.entries){
      this.rs.getAllRatings(params['id'], entrie.id).subscribe((res: Rating[])=>{
        entrie.ratings = res;
      })
    }
  }

  getComments(){
    const params = this.route.snapshot.params;
    for (let entrie of this.entries){
      this.cs.getAllComments(params['id'], entrie.id).subscribe( res => entrie.comments = res);
    }
  }

  removePadlet(){
    if (confirm('Padlet wirklich löschen?')) {
      this.ps.removePadlet(this.padlet.id)
        .subscribe((res:any) => this.router.navigate(['../'], { relativeTo:
          this.route }));
    }
  }

  isOwner(){
    let id: string = <string>sessionStorage.getItem("userId");
    if (this.padlet.user_id.toString() == id){
      return true;
    }
    else {
      return false;
    }
  }

  formatDate(){
      const date = new Date(this.padlet.created_at);
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      this.padlet.created_at = `${day < 10 ? '0' + day : day}.${month < 10 ? '0' + month : month}.${year}`;
  }


}
