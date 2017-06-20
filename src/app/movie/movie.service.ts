import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Movie } from './movie.model';

@Injectable()
export class MovieService {
  private movieUrl = 'https://ghibliapi.herokuapp.com/films';

  constructor(
    private http: Http
  ) { }

  getMovies(): Observable<Movie[]> {
    return this
      .http.get(this.movieUrl)
      .map(response => response.json() as Movie[]
      );
  }

}
