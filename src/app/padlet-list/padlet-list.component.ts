import {Component, OnInit} from '@angular/core';
import {Padlet} from "../shared/padlet";
import {PadletService} from "../shared/padlet.service";
import {UserService} from "../shared/user.service";

@Component({
  selector: 'bs-padlet-list',
  templateUrl: './padlet-list.component.html',
  styles: [
  ]
})
export class PadletListComponent implements OnInit{

  padlets: Padlet[] = [];

  constructor(private ps: PadletService, private us: UserService) {
  }

  ngOnInit() {
    this.ps.getAllPadlets().subscribe(res => {this.padlets = res});
    this.getUsername();
  }

  getUsername(){
    for(let padlet of this.padlets){
      this.us.getSingleUser(padlet.user_id).subscribe(res => padlet.user = res);
    }
  }


}
