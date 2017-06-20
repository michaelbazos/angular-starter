import { Component, OnInit } from '@angular/core';
import { Movie } from 'app/movie/movie.model';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movies: Movie[];

  constructor(
    private movieService: MovieService
  ) { }

  ngOnInit() {
    this.movieService
      .getMovies()
      .subscribe(
        movies => this.movies = movies,
        error => console.log(error)
      )
  }

}
