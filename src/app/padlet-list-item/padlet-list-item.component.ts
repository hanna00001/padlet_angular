import {Component, Input, OnInit} from '@angular/core';
import {Padlet} from "../shared/padlet";
import {PadletService} from "../shared/padlet.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../shared/authentication.service";

@Component({
  selector: 'a.bs-padlet-list-item',
  templateUrl: './padlet-list-item.component.html',
  styles: [
  ]
})
export class PadletListItemComponent implements OnInit{
  @Input() padlet: Padlet | undefined

  username: string | undefined = "";
  userimage: string | undefined = "";
  currentUrl:string = "";
  sessionId: number | undefined;

  constructor(
    private ps: PadletService,
    private route: ActivatedRoute,
    private router: Router,
  public authService: AuthenticationService) {
  }

  ngOnInit(){
    this.sessionId = parseInt(<string>sessionStorage.getItem("userId"));
    this.currentUrl = this.router.url;
    this.ps.getUserName(this.padlet?.user_id.toString()).subscribe(res => this.username = res);
    this.ps.getUserImage(this.padlet?.user_id.toString()).subscribe(res => this.userimage = res);

  }



}
