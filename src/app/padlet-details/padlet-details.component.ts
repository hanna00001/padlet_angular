import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Padlet, User} from "../shared/padlet";
import {Entrie} from "../shared/entrie";
import {PadletService} from "../shared/padlet.service";
import {ActivatedRoute, Router} from "@angular/router";
import {PadletFactory} from "../shared/padlet-factory";
import {Rating} from "../shared/rating";
import {AuthenticationService} from "../shared/authentication.service";

@Component({
  selector: 'bs-padlet-details',
  templateUrl: './padlet-details.component.html',
  styles: [
  ]
})
export class PadletDetailsComponent implements OnInit{

  padlet: Padlet = PadletFactory.empty();
  entries: Entrie[] = [];
  ratings: Rating[] = [];
  username: string = "";

  constructor(
    private ps: PadletService,
    private route: ActivatedRoute,
    private router: Router,
    public authService: AuthenticationService) {
  }

  ngOnInit(){
    const params = this.route.snapshot.params;
    this.ps.getSinglePadlet(params['id']).subscribe((p:Padlet) => this.padlet = p);
    this.ps.getAllEntries(params['id']).subscribe(res => this.entries = res);
    this.getUserName();
  }

  getUserName(){
    this.ps.getUserName(this.padlet?.user_id.toString()).subscribe(res => this.username = res);
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

}
