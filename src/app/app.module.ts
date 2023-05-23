import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PadletListComponent } from './padlet-list/padlet-list.component';
import { PadletListItemComponent } from './padlet-list-item/padlet-list-item.component';
import { PadletDetailsComponent } from './padlet-details/padlet-details.component';
import { EntrieItemComponent } from './entrie-item/entrie-item.component';
import {PadletService} from "./shared/padlet.service";
import {AppRoutingModule} from "./app-routing.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { PadletFormComponent } from './padlet-form/padlet-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import { EntrieFormComponent } from './entrie-form/entrie-form.component';
import { CommentFormComponent } from './comment-form/comment-form.component';
import { RatingFormComponent } from './rating-form/rating-form.component';
import { LoginComponent } from './login/login.component';
import {AuthenticationService} from "./shared/authentication.service";
import {TokenInterceptorService} from "./shared/token-interceptor.service";
import { RatingItemComponent } from './rating-item/rating-item.component';
import { CommentItemComponent } from './comment-item/comment-item.component';
import {UserService} from "./shared/user.service";
import {EntrieService} from "./shared/entrie.service";
import {RatingService} from "./shared/rating.service";
import {CommentService} from "./shared/comment.service";
import {JwtInterceptorService} from "./shared/jwt-interceptor.service";

@NgModule({
  declarations: [
    AppComponent,
    PadletListComponent,
    PadletListItemComponent,
    PadletDetailsComponent,
    EntrieItemComponent,
    PadletFormComponent,
    EntrieFormComponent,
    CommentFormComponent,
    RatingFormComponent,
    LoginComponent,
    RatingItemComponent,
    CommentItemComponent,
  ],
  imports: [
    BrowserModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule
  ],
  providers: [PadletService, UserService, EntrieService, RatingService, CommentService, AuthenticationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
