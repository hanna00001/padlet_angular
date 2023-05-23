import {Component, Input, OnInit} from '@angular/core';
import {Entrie, User} from "../shared/entrie";
import {Rating} from "../shared/rating";
import {Comment} from "../shared/comment";
import {PadletService} from "../shared/padlet.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../shared/authentication.service";
import {UserFactory} from "../shared/user-factory";
import {UserService} from "../shared/user.service";
import {EntrieService} from "../shared/entrie.service";
import {CommentService} from "../shared/comment.service";
import {RatingService} from "../shared/rating.service";

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
  user: User = UserFactory.empty();


  constructor(
    private ps: PadletService,
    private us: UserService,
    private es: EntrieService,
    private cs: CommentService,
    private rs: RatingService,
    private route: ActivatedRoute,
    private router: Router,
    public authService: AuthenticationService) {

  }

  ngOnInit() {
    const params = this.route.snapshot.params;
    if(this.entrie){
      this.us.getSingleUser(this.entrie.user_id).subscribe((u:User)=> this.user = u);
      this.rs.getAllRatings(params['id'], this.entrie.id).subscribe(res=>this.ratings = res);
      this.cs.getAllComments(params['id'], this.entrie.id).subscribe(res=>this.comments = res);
    }
  }


  removeEntrie(){
    if (confirm('Entrie wirklich löschen?')) {
      this.es.removeEntrie(this.entrie?.padlet_id, this.entrie?.id)
        .subscribe((res:any) => this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/padlets',this.entrie?.padlet_id ]); // Seite neu laden
        }));
    }
  }

  checkIfUserHasAlreadyRated(){
    /*let sessionId: string = <string>sessionStorage.getItem("userId");
    let hasRated = true;
    ths.ps.checkIfUserHasAlreadyRated(this.entrie?.id, parseInt(sessionId))
      .subscribe(res => hasRated = res);
    if (hasRated == true){
      return true
    }
    else {return false;}*/

  }

}
