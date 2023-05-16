import { Injectable } from '@angular/core';
import {Padlet, User} from "./padlet";
import {Entrie} from "./entrie";

@Injectable({
  providedIn: 'root'
})
export class PadletService {

  padlets: Padlet[];
  entries: Entrie[];

  constructor() {
    this.padlets = [
      new Padlet(1,
        'Padlet 1',
        new User(1,'Susi', 'Huber', 'test@test.at', 'secret', 'https://i.pinimg.com/originals/ba/d4/5a/bad45a40fa6e153ef8d1599ba875102c.png'),
        true),

      new Padlet(2,
        'Padlet 2',
        new User(2,'Fritz', 'Mair', 'test@test.at', 'secret', 'https://i.pinimg.com/originals/ba/d4/5a/bad45a40fa6e153ef8d1599ba875102c.png'),
        false)
    ];
    this.entries = [
      new Entrie(
        1,
        new User(3,'Susi', 'Huber', 'test@test.at', 'secret', 'https://i.pi'), 1,'Titel Entrie 1', 'content'),
      new Entrie(
        2, new User(4,'Susi', 'Huber', 'test@test.at', 'secret', 'https://i.pi'),
        2,'Titel Entrie', 'content'),
    ]
  }

  getAllPadlets(){
    return this.padlets;
  }

  getSinglePadlet(id:number) : Padlet {
    return <Padlet>this.padlets.find(padlet=> padlet.id == id);
  }

  getAllEntries(id:number) : Entrie[]{
    return <Array<Entrie>>this.entries.filter(entrie=>entrie.padlet_id == id);
  }
}
