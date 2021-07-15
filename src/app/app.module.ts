import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ImagesliderslickComponent } from './imagesliderslick/imagesliderslick.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, ImagesliderslickComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
