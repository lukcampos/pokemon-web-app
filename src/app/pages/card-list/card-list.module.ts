import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardListComponent } from './card-list.component';
import { CardListRoutingModule } from './card-list.routing';
import { CardListService } from '../../services/card-list/card-list.service'
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { CustomLoader, GetLang } from '../../translations/index';
import { CardlistInterceptor } from './cardlist.interceptor';
import { CardBoxModule } from '../../components/card-box/card-box.module';
import { PaginationModule } from '../../components/pagination/pagination.module';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap'
@NgModule({
  declarations: [
    CardListComponent
  ],
  imports: [
    CommonModule,
    CardListRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    NgbCarouselModule,
    TranslateModule.forChild({
      defaultLanguage: GetLang(),
      loader: {
        provide: TranslateLoader,
        useClass: CustomLoader
      },
    }),
    CardBoxModule,
    PaginationModule
  ],
  providers: [
    CardListService,
    HttpClient,
    HttpClientModule,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CardlistInterceptor,
      multi: true
    }],
})
export class CardListModule { }
