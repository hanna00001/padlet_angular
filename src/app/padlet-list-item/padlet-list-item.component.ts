import {Component, Input, OnInit} from '@angular/core';
import {Padlet, User} from "../shared/padlet";
import {PadletService} from "../shared/padlet.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../shared/authentication.service";
import {UserFactory} from "../shared/user-factory";
import {UserService} from "../shared/user.service";
import {Entrie} from "../shared/entrie";
import {EntrieFactory} from "../shared/entrie-factory";
import {PadletFactory} from "../shared/padlet-factory";

@Component({
  selector: 'a.bs-padlet-list-item',
  templateUrl: './padlet-list-item.component.html',
  styles: [
  ]
})
export class PadletListItemComponent implements OnInit{
  @Input() padlet: Padlet | undefined

  currentUrl:string = "";
  sessionId: number | undefined;
  user: User = UserFactory.empty();


  constructor(
    private ps: PadletService,
    private us: UserService,
    private route: ActivatedRoute,
    private router: Router,
    public authService: AuthenticationService) {
  }

  ngOnInit(){
    if(this.padlet){
      this.us.getSingleUser(this.padlet.user_id).subscribe((u:User)=> this.user = u);
    }
    this.sessionId = parseInt(<string>sessionStorage.getItem("userId"));
    this.currentUrl = this.router.url;
  }



}
