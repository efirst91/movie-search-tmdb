import {inject, Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LocalStorageService} from "@shared/services/local-storage/local-storage.service";
import {LangDictionaryInterface} from "@shared/models/lang-dictionary.interface";

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  private lStorageService = inject(LocalStorageService);


  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.lStorageService.getToken();
    const lang = this.lStorageService.getActiveLang();
    const langDictionary: LangDictionaryInterface = {
      'en': 'en-US',
      'es': 'es-ES'
    };
    const reqClone = request.clone({
      setHeaders: {
        Authorization: 'Bearer ' + token,
        language: lang ? langDictionary[lang] : 'en',
        accept: 'application/json'
      }
    });
    return next.handle(reqClone);
  }
}
