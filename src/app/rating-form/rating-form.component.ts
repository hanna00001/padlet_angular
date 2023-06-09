import {Component, Input} from '@angular/core';
import {Entrie} from "../shared/entrie";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RatingFactory} from "../shared/rating-factory";
import {ActivatedRoute, Router} from "@angular/router";
import {Rating} from "../shared/rating";
import {PadletFormErrorMessages} from "../padlet-form/padlet-form-error-messages";
import {RatingService} from "../shared/rating.service";

@Component({
  selector: 'div.bs-rating-form',
  templateUrl: './rating-form.component.html',
  styles: [
  ]
})
export class RatingFormComponent {

  @Input() entrie: Entrie | undefined;

  ratingForm: FormGroup;
  rating = RatingFactory.empty();
  errors: { [key: string]: string } = {};

  constructor(
    private fb: FormBuilder,
    private rs: RatingService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.ratingForm = this.fb.group({});
  }

  ngOnInit() {
    this.initRating();
  }

  initRating(){
    this.ratingForm = this.fb.group({
      rating: [this.rating.rating, [Validators.required, Validators.min(0), Validators.max(5)]],
    });
    this.ratingForm.statusChanges.subscribe(() =>
      this.updateErrorMessages());
  }

  submitForm(){
    const rating: Rating = RatingFactory.fromObject(this.ratingForm.value);
    let sessionId: string = <string>sessionStorage.getItem("userId");
    rating.user_id = parseInt(sessionId);
    rating.entrie_id = this.entrie?.id
    this.rs.createRating(this.entrie?.padlet_id, this.entrie?.id, rating).subscribe(res => {
      this.rating = RatingFactory.empty();
      this.ratingForm.reset(RatingFactory.empty());
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/padlets', this.entrie?.padlet_id]); // Seite neu laden
      });
    });
  }

  updateErrorMessages() {
    console.log("Is invalid? " + this.ratingForm.invalid);
    this.errors = {};
    for (const message of PadletFormErrorMessages) {
      const control = this.ratingForm.get(message.forControl);
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
