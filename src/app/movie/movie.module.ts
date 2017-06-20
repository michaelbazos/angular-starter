import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from './movie.service';
import { MovieListComponent } from './movie-list/movie-list.component';
import { RouterModule } from '@angular/router';
import { MovieRoutes } from './movie.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MovieRoutes)
  ],
  declarations: [
    MovieListComponent
  ],
  providers: [
    MovieService
  ]
})
export class MovieModule { }
