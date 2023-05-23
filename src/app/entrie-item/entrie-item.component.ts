import {Component, Input, OnInit} from '@angular/core';
import {Entrie} from "../shared/entrie";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../shared/authentication.service";
import {UserService} from "../shared/user.service";
import {EntrieService} from "../shared/entrie.service";

@Component({
  selector: 'div.bs-entrie-item',
  templateUrl: './entrie-item.component.html',
  styles: [
  ]
})
export class EntrieItemComponent implements OnInit{

  @Input() entrie: Entrie | undefined

  constructor(
    private us: UserService,
    private es: EntrieService,
    private route: ActivatedRoute,
    private router: Router,
    public authService: AuthenticationService) {

  }

  ngOnInit() {
    if(this.entrie){
      this.getRatingUsers();
      this.getCommentUsers();
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
