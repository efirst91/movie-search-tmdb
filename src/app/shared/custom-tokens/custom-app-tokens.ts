import { ErrorHandler, InjectionToken } from '@angular/core';

export const API_URL = new InjectionToken<string>('API_URL');
export const IMAGE_BASE_URL = new InjectionToken<string>('IMAGE_BASE_URL');
export const PROXY_BASE_URL = new InjectionToken<string>('PROXY_BASE_URL');
export const ERROR_HANDLERS = new InjectionToken<ErrorHandler[]>(
  'ERROR_HANDLERS',
);
