import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IMovie } from '../Movie/IMovie.interface';
import { Observable } from 'rxjs';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  constructor(private http:HttpClient) { }
   
  getAllMovies(): Observable<IMovie[]>{
    return this.http.get('data/datas.json').pipe(
      map(data => {
        const moviesArray: Array<IMovie> = [];
        for(var id in data){
          if(data.hasOwnProperty(id)){
            moviesArray.push(data[id]); //moviesAray.push(data[id]);
          }
        }
        return moviesArray;
      })
    );
  }
}
