import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {MoviesService} from "@data-access/movies.service";
import {map, mergeMap} from "rxjs/operators";

import * as actions from "./global.actions"
import {catchError, EMPTY} from "rxjs";
import {SnackBarNotificationsService} from "@shared/services/snack-bar-notifications/snack-bar-notifications.service";
import {TranslocoService} from "@ngneat/transloco";

@Injectable({
  providedIn: 'root'
})
export class GlobalEffects {

  loadMovies$ = createEffect(() => this.actions$.pipe(
    ofType(actions.search),
    mergeMap((action) => this.moviesService.getData(action.search)
      .pipe(
        map(response => actions.searchSuccess({criteria: action.search, data: response}),
        ),
        catchError(err => {
          const errorMsg = this.tlService.translate("Can´t load the movies withe the specific search, " +
            "please review your search query");
          const actionMsg = this.tlService.translate('Cancel');
          this.notificationS.openSnackBar(errorMsg, actionMsg, 6000);
          return EMPTY;
        })
      )
    )))

  constructor(
    private actions$: Actions,
    private moviesService: MoviesService,
    private tlService: TranslocoService,
    private notificationS: SnackBarNotificationsService
  ) {
  }
}
