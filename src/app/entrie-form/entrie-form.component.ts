import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PadletFactory} from "../shared/padlet-factory";
import {EntrieFactory} from "../shared/entrie-factory";
import {PadletService} from "../shared/padlet.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Padlet} from "../shared/padlet";
import {Entrie} from "../shared/entrie";
import {PadletFormErrorMessages} from "../padlet-form/padlet-form-error-messages";

@Component({
  selector: 'div.bs-entrie-form',
  templateUrl: './entrie-form.component.html',
  styles: [
  ]
})
export class EntrieFormComponent implements OnInit{
  entrieForm: FormGroup;
  entrie = EntrieFactory.empty();
  errors: { [key: string]: string } = {};
  isUpdatingEntrie = false;

  constructor(private fb: FormBuilder,
              private ps: PadletService,
              private route: ActivatedRoute,
              private router: Router) {
    this.entrieForm = this.fb.group({});
  }

  ngOnInit() {
    const id = this.route.snapshot.params["entrieid"];
    if (id){
      this.isUpdatingEntrie = true
      this.ps.getEntryById(id).subscribe(entrie => {
        this.entrie = entrie;
        this.initEntrie();
      });
    }
    this.initEntrie();
  }

  initEntrie(){
    this.entrieForm = this.fb.group({
      id: this.entrie.id,
      title: [this.entrie.title, Validators.required],
      content: [this.entrie.content, Validators.required]
    });
    this.entrieForm.statusChanges.subscribe(() =>
      this.updateErrorMessages());
  }

  submitForm(){
    const id = this.route.snapshot.params["id"];
    const entrie: Entrie = EntrieFactory.fromObject(this.entrieForm.value);
    if(this.isUpdatingEntrie){
      this.ps.updateEntrie(id, entrie).subscribe(res=>{
        this.router.navigate([".."],{
          relativeTo: this.route
        });
      });
    } else {
      let sessionId: string = <string>sessionStorage.getItem("userId");
      entrie.user_id = parseInt(sessionId);
      this.ps.createEntrie(id, entrie).subscribe(res => {
        this.entrie = EntrieFactory.empty();
        this.entrieForm.reset(EntrieFactory.empty());
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/padlets', id]); // Seite neu laden
        });
      });
    }
  }

  updateErrorMessages() {
    console.log("Is invalid? " + this.entrieForm.invalid);
    this.errors = {};
    for (const message of PadletFormErrorMessages) {
      const control = this.entrieForm.get(message.forControl);
      if (
        control &&
        control.dirty &&
        control.invalid && control.errors &&
        control.errors[message.forValidator] &&
        !this.errors[message.forControl]
      ) {
        this.errors[message.forControl] = message.text;
      }
    }
  }
}
