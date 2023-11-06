import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

import {SnackBarNotificationsService} from "@shared/services/snack-bar-notifications/snack-bar-notifications.service";
import {SearchInterface} from "@shared/models/search.interface";
import {ResultInterface} from "@shared/models/result.interface";
import {MovieInterface} from "@shared/models/movie.interface";
import {PROXY_BASE_URL} from "@shared/custom-tokens/custom-app-tokens";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private readonly httpClient = inject(HttpClient)
  private readonly notification = inject(SnackBarNotificationsService);
  private readonly apiProxyUrlBase = inject(PROXY_BASE_URL);
  private url = `${this.apiProxyUrlBase}3/search/movie//`

  getData(search: SearchInterface): Observable<ResultInterface<MovieInterface>> {
    let params = new HttpParams();
    params = params.set('query', search.query);
    params = params.set('year', search.year);
    params = params.set('page', search.page ?? 1);

    return this.httpClient.get<ResultInterface<MovieInterface>>(this.url, {
      params
    })
  }
}
