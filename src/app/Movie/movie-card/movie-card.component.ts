import { Component, Input, OnInit } from '@angular/core';
import { IMovie } from '../IMovie.interface';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent {

  @Input() Movie: IMovie;

}
