import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardListComponent } from './card-list.component';
import { CardListRoutingModule } from './card-list.routing';
import { CardListService } from '../../services/card-list/card-list.service'
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { CustomLoader, GetLang } from '../../translations/index';
@NgModule({
  declarations: [
    CardListComponent
  ],
  imports: [
    CommonModule,
    CardListRoutingModule,
    MatCardModule,
    HttpClientModule,
    MatChipsModule,
    TranslateModule.forRoot(),
    TranslateModule.forChild({
      defaultLanguage: GetLang(),
      loader: {
        provide: TranslateLoader,
        useClass: CustomLoader
      },
    }),
  ],
  providers: [
    CardListService,
    HttpClient
  ]
})
export class CardListModule { }
