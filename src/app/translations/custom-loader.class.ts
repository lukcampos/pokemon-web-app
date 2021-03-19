import { TranslateLoader } from '@ngx-translate/core';
import { of } from 'rxjs';
import { Portuguese } from './pt';
import { English } from './en';

export class CustomLoader extends TranslateLoader {
  public getTranslation(lang: string): any {
    switch (lang) {
      case 'pt':
        return of(Portuguese);
      case 'en':
        return of(English);
    }
  }
}
