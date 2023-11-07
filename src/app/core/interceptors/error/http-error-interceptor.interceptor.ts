import { inject, Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpStatusCode,
} from '@angular/common/http';
import {
  EMPTY,
  mergeMap,
  Observable,
  retryWhen,
  take,
  throwError,
  timer,
} from 'rxjs';
import { Router } from '@angular/router';
import { SnackBarNotificationsService } from '@shared/services/snack-bar-notifications/snack-bar-notifications.service';
import { TranslocoService } from '@ngneat/transloco';

@Injectable()
export class HttpErrorInterceptorInterceptor implements HttpInterceptor {
  router = inject(Router);
  notification = inject(SnackBarNotificationsService);
  translate = inject(TranslocoService);

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      retryWhen((errors: Observable<HttpErrorResponse>) =>
        errors.pipe(
          mergeMap((error, index) => {
            let message = '';
            if (index === 0 && error.status !== HttpStatusCode.Unauthorized) {
              // Retry the request immediately for the first error
              return this.retryRequest(error);
            }

            switch (error.status) {
              case HttpStatusCode.Unauthorized:
                return this.handle401Error(error);

              case HttpStatusCode.NotFound:
                return this.handle404Error(error);

              case HttpStatusCode.InternalServerError:
                return this.handle500Error(error);

              default:
                message = error.error.status_message;
                return throwError(() => new Error(message));
            }
          }),
        ),
      ),
    );
  }

  private handle401Error(error: HttpErrorResponse): Observable<any> {
    const message = this.translate.translate(
      'An error has occurred with your token, pleas update it',
    );
    const action = this.translate.translate('Close');
    this.router.navigate(['/token-acceso']).then();
    this.notification.openSnackBar(message, action);
    return EMPTY;
  }

  private handle404Error(error: HttpErrorResponse): Observable<any> {
    const message = this.translate.translate(
      'File not found, please review your api base url',
    );
    const action = this.translate.translate('Close');
    this.notification.openSnackBar(message, action);
    return EMPTY;
  }

  private handle500Error(error: HttpErrorResponse): Observable<any> {
    const message = this.translate.translate(
      'An error has occurred with serve connection, please contact with your api provider',
    );
    const action = this.translate.translate('Close');
    this.notification.openSnackBar(message, action);
    return EMPTY;
  }

  private retryRequest(error: HttpErrorResponse): Observable<any> {
    return timer(2000).pipe(take(1));
  }
}
