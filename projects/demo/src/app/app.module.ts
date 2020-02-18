import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RxSubscribeModule } from '@soundng/rx-subscribe';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RxSubscribeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
