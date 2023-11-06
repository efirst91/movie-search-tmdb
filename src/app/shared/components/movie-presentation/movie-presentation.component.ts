import {Component, inject, Input} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {IMAGE_BASE_URL} from "@shared/custom-tokens/custom-app-tokens";
import {MovieInterface} from "@shared/models/movie.interface";
import {MatCardModule} from "@angular/material/card";
import {TranslocoModule} from "@ngneat/transloco";

@Component({
  selector: 'app-movie-presentation',
  standalone: true,
  imports: [CommonModule,TranslocoModule, MatCardModule, NgOptimizedImage],
  templateUrl: './movie-presentation.component.html',
  styleUrls: ['./movie-presentation.component.scss']
})
export class MoviePresentationComponent {
  imageBaseUrl = inject(IMAGE_BASE_URL);
  url = `${this.imageBaseUrl}original`;
  @Input() movie!: MovieInterface;

  setDefault($event:any){
    if($event?.target){
      $event.target.src= '../../../assets/images/not-found-img.png'
    }
  }
}
