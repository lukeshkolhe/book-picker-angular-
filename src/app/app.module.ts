import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { BookInfoComponent } from './book-info/book-info.component';
import { SelectGenreComponent } from './select-genre/select-genre.component';
import { ImgLeftComponent } from './log-in/img-left/img-left.component';
import { SignInComponent } from './log-in/sign-in/sign-in.component';
import { SignUpComponent } from './log-in/sign-up/sign-up.component';
import { NavComponent } from './nav/nav.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    BookInfoComponent,
    SelectGenreComponent,
    ImgLeftComponent,
    SignInComponent,
    SignUpComponent,
    NavComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
