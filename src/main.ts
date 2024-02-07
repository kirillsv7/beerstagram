import { enableProdMode, importProvidersFrom, isDevMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
// Nueva importacion
import { defineCustomElements } from '@ionic/pwa-elements/loader';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { provideServiceWorker } from '@angular/service-worker';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

if (environment.production) {
  enableProdMode();
}

// Call the element loader before the bootstrapModule/bootstrapApplication call
defineCustomElements(window);

// Para el multi lenguaje (Añadido para el cambio de idioma)
export const createTranslateLoader = (http: HttpClient) =>
  new TranslateHttpLoader(http, './assets/i18n/', '.json');
// Para el multi lenguaje Aqui ponemos el lenguaje por defecto de nuestra app) (Añadido para el cambio de idioma)
export const provideTranslation = () => ({
  defaultLanguage: 'es',
  loader: {
    provide: TranslateLoader,
    useFactory: createTranslateLoader,
    deps: [HttpClient]
  },
});

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes),
    provideServiceWorker('ngsw-worker.js', {
        enabled: !isDevMode(),
        registrationStrategy: 'registerWhenStable:30000'
    }),
    provideServiceWorker('ngsw-worker.js', {
        enabled: !isDevMode(),
        registrationStrategy: 'registerWhenStable:30000'
    }),
    
    // Para el multi lenguaje (Añadido para el cambio de idioma)
    importProvidersFrom([
      HttpClientModule,
      TranslateModule.forRoot(provideTranslation())
    ]), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"testcifo2","appId":"1:1065305321895:web:ee4e8ef67c2cdb5ff78682","storageBucket":"testcifo2.appspot.com","apiKey":"AIzaSyACXm84YonghDdCzKtw5URacQbr-Is9Xak","authDomain":"testcifo2.firebaseapp.com","messagingSenderId":"1065305321895"}))), importProvidersFrom(provideFirestore(() => getFirestore()))
],
});
