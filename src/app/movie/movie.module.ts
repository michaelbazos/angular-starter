import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieRoutes } from './movie.routes';
import { MovieService } from './movie.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    SharedModule,
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
