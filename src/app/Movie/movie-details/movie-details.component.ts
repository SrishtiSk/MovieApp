import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  public movieId:number;

  constructor(private router: ActivatedRoute, private route:Router) { }

  ngOnInit(): void {
    this.movieId = +this.router.snapshot.params['id'];
  }
  onBack(){
    this.route.navigate(['/movie-list']);
  }


}
