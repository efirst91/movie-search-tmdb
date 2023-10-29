import {ErrorHandler, inject, Injectable} from '@angular/core';

import {ERROR_HANDLERS} from "@shared/custom-tokens/custom-app-tokens";


@Injectable({
  providedIn: 'root'
})
export class GlobalHandlerService implements ErrorHandler{
  readonly #handlers = inject(ERROR_HANDLERS) ?? [];

  handleError(error: unknown): void {
    this.#handlers.forEach(handle => handle.handleError(error));
  }
}
