import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Movie } from '../models/movie.model';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'FlipFlix-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit, OnDestroy {

  id: number;
  movie: Movie;
  movieSub$: Subscription;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    ) {}

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id'); /**tudo que tem this esta quebrado */
    this.movieSub$ = this.movieService.movie(this.id).subscribe(movie =>{
    this.movie = movie;
    console.log(this.movie);
  });

}

  ngOnDestroy(): void {
    this.movieSub$.unsubscribe();
  }
}

