import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

import { LocalStorageService } from '@shared/services/local-storage/local-storage.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const lStorageService = inject(LocalStorageService);
  const active = !!lStorageService.getToken();
  if (!active) {
    router.navigate(['/token-acceso']).then();
  }
  return active;
};
