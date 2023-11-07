import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from '../src/app/modules/main/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
