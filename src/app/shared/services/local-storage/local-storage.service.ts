import { Injectable } from '@angular/core';
import { STORAGE_KEY } from '@shared/enums/app';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {

  setActiveLang(lang: string): void {
    localStorage.setItem(STORAGE_KEY.LANG, lang);
  }

  getActiveLang(): string | null {
    return localStorage.getItem(STORAGE_KEY.LANG);
  }

  setToken(token: string): void {
    localStorage.setItem(STORAGE_KEY.TOKEN, token);
  }

  getToken(): string | null {
    return localStorage.getItem(STORAGE_KEY.TOKEN);
  }
}
