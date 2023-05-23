import {Component, Input} from '@angular/core';
import {Entrie} from "../shared/entrie";
import {Comment} from "../shared/comment";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CommentFactory} from "../shared/comment-factory";
import {ActivatedRoute, Router} from "@angular/router";
import {PadletFormErrorMessages} from "../padlet-form/padlet-form-error-messages";
import {CommentService} from "../shared/comment.service";

@Component({
  selector: 'div.bs-comment-form',
  templateUrl: './comment-form.component.html',
  styles: [
  ]
})
export class CommentFormComponent {

  @Input() entrie: Entrie | undefined;

  commentForm: FormGroup;
  comment = CommentFactory.empty();
  errors: { [key: string]: string } = {};

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private cs: CommentService)
  {
    this.commentForm = this.fb.group({});
  }

  ngOnInit() {
    this.initComment();
  }

  initComment(){
    this.commentForm = this.fb.group({
      id: this.comment.id,
      comment: [this.comment.comment, Validators.required],
    });
    this.commentForm.statusChanges.subscribe(() =>
      this.updateErrorMessages());
  }

  submitForm(){
    const comment: Comment = CommentFactory.fromObject(this.commentForm.value);
    let sessionId: string = <string>sessionStorage.getItem("userId");
    comment.user_id = parseInt(sessionId);
      comment.entrie_id = this.entrie?.id
      this.cs.createComment(this.entrie?.padlet_id, this.entrie?.id, comment).subscribe(res => {
        this.comment = CommentFactory.empty();
        this.commentForm.reset(CommentFactory.empty());
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/padlets', this.entrie?.padlet_id]); // Seite neu laden
        });
      });
    }

  updateErrorMessages() {
    console.log("Is invalid? " + this.commentForm.invalid);
    this.errors = {};
    for (const message of PadletFormErrorMessages) {
      const control = this.commentForm.get(message.forControl);
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
