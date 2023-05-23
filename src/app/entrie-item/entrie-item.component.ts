import {Component, Input, OnInit} from '@angular/core';
import {Entrie} from "../shared/entrie";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../shared/authentication.service";
import {UserService} from "../shared/user.service";
import {EntrieService} from "../shared/entrie.service";
import {RatingService} from "../shared/rating.service";

@Component({
  selector: 'div.bs-entrie-item',
  templateUrl: './entrie-item.component.html',
  styles: [
  ]
})
export class EntrieItemComponent implements OnInit{

  @Input() entrie: Entrie | undefined

  checkRated : boolean = false;

  constructor(
    private us: UserService,
    private es: EntrieService,
    private rs: RatingService,
    private route: ActivatedRoute,
    private router: Router,
    public authService: AuthenticationService) {

  }

  ngOnInit() {
    if(this.entrie){
      this.getRatingUsers();
      this.getCommentUsers();
    }
    this.checkIfUserHasAlreadyRated();
  }


  removeEntrie(){
    if (confirm('Entrie wirklich löschen?')) {
      this.es.removeEntrie(this.entrie?.padlet_id, this.entrie?.id)
        .subscribe((res:any) => this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/padlets',this.entrie?.padlet_id ]); // Seite neu laden
        }));
    }
  }

  getCommentUsers(){
    if(this.entrie) {
      for (let comment of this.entrie.comments) {
        this.us.getSingleUser(comment.user_id).subscribe(res => comment.user = res)
      }
    }
  }

  getRatingUsers(){
    if(this.entrie) {
      for (let rating of this.entrie.ratings) {
        this.us.getSingleUser(rating.user_id).subscribe(res => rating.user = res)
      }
    }
  }

  checkIfUserHasAlreadyRated(){
    let sessionId: string = <string>sessionStorage.getItem("userId");
    this.rs.checkIfUserHasAlreadyRated(this.entrie?.id, parseInt(sessionId)).subscribe(res=> {
      this.checkRated = res;
    });

  }

}
