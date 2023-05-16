import {Component, Input, OnInit} from '@angular/core';
import {Padlet} from "../shared/padlet";
import {PadletService} from "../shared/padlet.service";
import {ActivatedRoute, Router} from "@angular/router";

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
    private router: Router) {
  }

  ngOnInit(){}

  getUserName(id: number){
    this.ps.getUserName(id)
      .subscribe((res:any) => this.router.navigate(['../'], { relativeTo:
        this.route }));
  }


}
