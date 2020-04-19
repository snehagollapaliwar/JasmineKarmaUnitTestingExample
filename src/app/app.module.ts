import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';

import { PostService } from './shared/post.service';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
