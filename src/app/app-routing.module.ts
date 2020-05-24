import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectGenreComponent } from 'src/app/select-genre/select-genre.component';
import { LogInComponent } from 'src/app/log-in/log-in.component';
import { HomepageComponent } from 'src/app/homepage/homepage.component';
import { BookInfoComponent } from 'src/app/book-info/book-info.component';


const routes: Routes = [
  { path: 'log-in' , component: LogInComponent},
  { path: 'select-genre' , component: SelectGenreComponent},
  { path: 'homepage' , component: HomepageComponent},
  { path: 'book-info' , component: BookInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
