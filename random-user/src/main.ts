import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { provideHttpClient } from '@angular/common/http'; // WAJIB untuk koneksi API


import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    // Routing Strategy Ionic
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },

    // Ionic Standalone
    provideIonicAngular(),

    // Router dengan Preloading
    provideRouter(routes, withPreloading(PreloadAllModules)),

    // Aktifkan HTTP Client (agar bisa request ke API Gemini)
    provideHttpClient(),
  ],
});
