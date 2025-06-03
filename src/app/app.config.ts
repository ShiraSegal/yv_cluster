import { MatDialogModule } from '@angular/material/dialog';

import { LayoutModule } from '@angular/cdk/layout';
import { provideAnimations } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppRoutingModule ,routes} from './app-routing.module';
import { APP_ID, importProvidersFrom } from '@angular/core';
import {provideClientHydration} from '@angular/platform-browser';
import { YvTranslateModule } from './core/yv-translate/yv-translate.module';
import { DatePipe } from '@angular/common';




export const appConfig = {
  providers: [DatePipe,
    importProvidersFrom(BrowserModule, AppRoutingModule, YvTranslateModule, LayoutModule, MatDialogModule,
      ),
    provideClientHydration(),
    { provide: APP_ID, useValue: 'serverApp' },
    provideRouter(routes),
    provideAnimations()
]
}
