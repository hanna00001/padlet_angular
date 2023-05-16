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

  @Output() showDetailsEvent = new EventEmitter<Padlet>;

  constructor(private p: PadletService) {
  }

  ngOnInit() {

this.padlets = this.p.getAllPadlets();

    //console.log(this.padlets);

  }

  showDetails(padlet:Padlet){
    this.showDetailsEvent.emit(padlet);
  }

}
