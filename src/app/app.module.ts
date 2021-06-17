import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorsComponent } from './ui/colors/colors.component';
import { FontsComponent } from './ui/fonts/fonts.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorsComponent,
    FontsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
