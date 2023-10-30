import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable, retry} from "rxjs";

import {SnackBarNotificationsService} from "@shared/services/snack-bar-notifications/snack-bar-notifications.service";
import {SearchInterface} from "@shared/models/search.interface";
import {ResultInterface} from "@shared/models/result.interface";
import {MovieInterface} from "@shared/models/movie.interface";
import {API_URL} from "@shared/custom-tokens/custom-app-tokens";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private readonly httpClient = inject(HttpClient)
  private readonly notification = inject(SnackBarNotificationsService);
  private readonly apiUrlBase = inject(API_URL);
  private url = `${this.apiUrlBase}3/search/movie`

  getData(search: SearchInterface): Observable<ResultInterface<MovieInterface>> {
    let params = new HttpParams();
    params = params.set('query', search.query);
    params = params.set('year', search.year);
    params = params.set('page', search.page ?? 1);

    return this.httpClient.get<ResultInterface<MovieInterface>>('../../assets/fake-values/mock-data.json', {
      params
    }).pipe(
      retry({
        count: 1,
        delay: 2000
      }),
    )

    // // the api throw an error of cors, for this reason I use the mock json for now
    // the solution could be set a proxy configuration, but I don't have enough time at this moment with the deadline
    // return this.httpClient.get<ResultInterface<MovieInterface>>(this.url, {
    //   params
    // }).pipe(
    //   retry({
    //     count: 1,
    //     delay: 2000
    //   }),
    // )
  }
}
