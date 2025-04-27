import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';


@NgModule({
  imports: [
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports: [TranslateModule]
})
export class YvTranslateModule {
  constructor(translate: TranslateService
    ) {
    translate.addLangs(environment.optionsLangs);
    translate.setDefaultLang(environment.defaultLang);
  }
}


export function translateLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient,"./assets/i18n/",".json");
}

