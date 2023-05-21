import {Component, Input, OnInit} from '@angular/core';
import {Entrie} from "../shared/entrie";
import {Rating} from "../shared/rating";
import {Comment} from "../shared/comment";
import {PadletService} from "../shared/padlet.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../shared/authentication.service";

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
    private router: Router,
    public authService: AuthenticationService) {

  }

  ngOnInit() {
    const params = this.route.snapshot.params;
    this.ps.getAllRatings(params['id'], this.entrie?.id).subscribe(res=>this.ratings = res);
    this.ps.getAllComments(params['id'], this.entrie?.id).subscribe(res=>this.comments = res);
    this.getUsername(this.entrie?.user_id)
  }

  getUsername(id: number | undefined){
    this.ps.getUserName(id?.toString()).subscribe(res => this.username = res);
  }



  removeEntrie(){
    if (confirm('Entrie wirklich löschen?')) {
      this.ps.removeEntrie(this.entrie?.padlet_id, this.entrie?.id)
        .subscribe((res:any) => this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/padlets',this.entrie?.padlet_id ]); // Seite neu laden
        }));
    }
  }

  checkIfUserHasAlreadyRated(){
    let sessionId: string = <string>sessionStorage.getItem("userId");
    if(this.ps.checkIfUserHasAlreadyRated(this.entrie?.id, parseInt(sessionId))){
      return false;
    }
    else {
      return true;
    }
  }

}
