import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SlateModule } from 'slate-angular';

import { AppComponent } from './app.component';
import { DemoTextMarkComponent } from './text-mark.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoTextMarkComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SlateModule
  ],
  entryComponents: [DemoTextMarkComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
