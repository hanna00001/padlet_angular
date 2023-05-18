import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Padlet, User} from "../shared/padlet";
import {Entrie} from "../shared/entrie";
import {PadletService} from "../shared/padlet.service";

@Component({
  selector: 'bs-padlet-list',
  templateUrl: './padlet-list.component.html',
  styles: [
  ]
})
export class PadletListComponent implements OnInit{

  padlets: Padlet[] = [];

  constructor(private p: PadletService) {
  }

  ngOnInit() {
    this.p.getAllPadlets().subscribe(res => this.padlets = res);
  }


}
