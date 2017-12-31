import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {EditorModule} from 'primeng/primeng';
import {GalleriaModule} from 'primeng/primeng';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
