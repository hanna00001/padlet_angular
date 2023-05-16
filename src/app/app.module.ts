import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PadletListComponent } from './padlet-list/padlet-list.component';
import { PadletListItemComponent } from './padlet-list-item/padlet-list-item.component';
import { PadletDetailsComponent } from './padlet-details/padlet-details.component';
import { EntrieItemComponent } from './entrie-item/entrie-item.component';
import {PadletService} from "./shared/padlet.service";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    PadletListComponent,
    PadletListItemComponent,
    PadletDetailsComponent,
    EntrieItemComponent,
  ],
  imports: [
    BrowserModule, AppRoutingModule
  ],
  providers: [PadletService],
  bootstrap: [AppComponent]
})
export class AppModule { }
