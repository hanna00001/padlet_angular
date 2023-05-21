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

  constructor(
    private ps: PadletService,
    private route: ActivatedRoute,
    private router: Router,
  public authService: AuthenticationService) {
  }

  ngOnInit(){}

  /*getUserName(id: number | undefined){
      this.ps.getUserName(id)
        .subscribe((res:any) => this.router.navigate(['../'], { relativeTo:
          this.route }));

  }*/


}
