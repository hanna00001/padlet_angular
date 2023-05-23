import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Padlet, User} from "../shared/padlet";
import {Entrie} from "../shared/entrie";
import {PadletService} from "../shared/padlet.service";
import {ActivatedRoute, Router} from "@angular/router";
import {PadletFactory} from "../shared/padlet-factory";
import {Rating} from "../shared/rating";
import {AuthenticationService} from "../shared/authentication.service";
import {UserService} from "../shared/user.service";
import {UserFactory} from "../shared/user-factory";
import {EntrieService} from "../shared/entrie.service";

@Component({
  selector: 'bs-padlet-details',
  templateUrl: './padlet-details.component.html',
  styles: [
  ]
})
export class PadletDetailsComponent implements OnInit{

  padlet: Padlet = PadletFactory.empty();
  entries: Entrie[] = [];
  user: User = UserFactory.empty();

  constructor(
    private ps: PadletService,
    private us: UserService,
    private es: EntrieService,
    private route: ActivatedRoute,
    private router: Router,
    public authService: AuthenticationService) {
  }

  ngOnInit(){
    const params = this.route.snapshot.params;
    this.ps.getSinglePadlet(params['id']).subscribe((p:Padlet) => {
      this.padlet = p;
      this.us.getSingleUser(this.padlet.user_id).subscribe((u:User)=> this.user = u);
      this.es.getAllEntries(params['id']).subscribe(res => this.entries = res);
    });

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
