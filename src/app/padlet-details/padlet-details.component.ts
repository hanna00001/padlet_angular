import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Padlet, User} from "../shared/padlet";
import {Entrie} from "../shared/entrie";
import {PadletService} from "../shared/padlet.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'bs-padlet-details',
  templateUrl: './padlet-details.component.html',
  styles: [
  ]
})
export class PadletDetailsComponent implements OnInit{

  padlet: Padlet | undefined;
  entries: Entrie[] = [];


  constructor(private p: PadletService, private route: ActivatedRoute) {
  }

  ngOnInit(){
    const params = this.route.snapshot.params;
    this.padlet = this.p.getSinglePadlet(params['id']);
    this.entries = this.p.getAllEntries(params['id']);
  }

}
