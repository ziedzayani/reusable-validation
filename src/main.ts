import { enableProdMode } from '@angular/core';
import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';



import { environment } from './environments/environment';
import { provideRouter } from '@angular/router';
import { APP_ROUTES } from './app/app-routes';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent,{
   providers : [
    provideRouter(APP_ROUTES),
    provideAnimations()
  ]
  })
  .catch(err => console.error(err));
