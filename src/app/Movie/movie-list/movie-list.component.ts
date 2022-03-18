import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/Services/movie.service';
import { IMovie } from '../IMovie.interface';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  
  Movies: Array<IMovie>;
  //Movies: any;
  Genere='';
  FilterGenere='';
  Name='';
  FilterName='';

  // FilterBy='';
  // FilterbyParam ='';

  SortbyParam='';
  SortDirection='asc';

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getAllMovies().subscribe(
      data=>{
        this.Movies = data;
        console.log(data);
      }, error =>{ 
        console.log('httperror: '),
        console.log(error);
      }
    );
  }

  onGenereFilter(){
     this.FilterGenere = this.Genere;
  }
  onClearGenereFilter(){
    this.FilterGenere ='';
    this.Genere='';
  }
  onNameFilter(){
    this.FilterName = this.Name;
  }
  onClearNameFilter(){
    this.FilterName = this.Name;
    this.Name='';
  }
  
  onSort(){
  }

  onClearSort(){
  }

  onSortDirection(){
    if(this.SortDirection ==='desc')
      this.SortDirection ='asc';
    else
      this.SortDirection ='desc';
  }


}
