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
    this.ps.getAllPadlets().subscribe(res => {
      this.padlets = res;
      this.getUsername();
      this.formatDate();
    });

  }

  getUsername(){
    for(let padlet of this.padlets){
      this.us.getSingleUser(padlet.user_id).subscribe(res => padlet.user = res);
    }
  }

  formatDate(){
    for(let padlet of this.padlets) {
      const date = new Date(padlet.created_at);
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      padlet.created_at = `${day < 10 ? '0' + day : day}.${month < 10 ? '0' + month : month}.${year}`;
    }
  }


}
