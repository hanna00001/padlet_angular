import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PadletFactory} from "../shared/padlet-factory";
import {PadletService} from "../shared/padlet.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Padlet} from "../shared/padlet";
import { PadletFormErrorMessages} from "./padlet-form-error-messages";

@Component({
  selector: 'bs-padlet-form',
  templateUrl: './padlet-form.component.html',
  styles: [
  ]
})
export class PadletFormComponent implements OnInit{
  padletForm: FormGroup;
  padlet = PadletFactory.empty();
  errors: { [key: string]: string } = {};
  isUpdatingPadlet = false;
  is_public: string = "1";

  constructor(
    private fb: FormBuilder,
    private ps: PadletService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.padletForm = this.fb.group({});
  }

  ngOnInit() {
    const id = this.route.snapshot.params["id"];
    if (id){
      this.isUpdatingPadlet = true
      this.ps.getSinglePadlet(id).subscribe(padlet => {
        this.padlet = padlet;
        this.initPadlet();
      });
    }
    this.initPadlet();
  }

  initPadlet(){
    this.padletForm = this.fb.group({
      id: this.padlet.id,
      name: [this.padlet.name, Validators.required],
      is_public : this.padlet.is_public
    });
    this.padletForm.statusChanges.subscribe(() =>
      this.updateErrorMessages());
  }

  submitForm(){
    const padlet: Padlet = PadletFactory.fromObject(this.padletForm.value);
    if(this.isUpdatingPadlet){
      this.ps.updatePadlet(padlet).subscribe(res=>{
        this.router.navigate(["../../padlets",padlet.id],{
          relativeTo: this.route
        });
      });
    } else {
      let sessionId: string = <string>sessionStorage.getItem("userId");
      padlet.user_id = parseInt(sessionId);
      this.ps.createPadlet(padlet).subscribe(res => {
        this.padlet = PadletFactory.empty();
        this.padletForm.reset(PadletFactory.empty());
        this.router.navigate(["../padlets"], {relativeTo: this.route});
      });
    }
  }

  updateErrorMessages() {
    console.log("Is invalid? " + this.padletForm.invalid);
    this.errors = {};
    for (const message of PadletFormErrorMessages) {
      const control = this.padletForm.get(message.forControl);
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
