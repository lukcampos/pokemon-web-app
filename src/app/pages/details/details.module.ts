import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import { DetailsInterceptor } from './details.interceptor';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DetailsRoutingModule } from './details.routing';
import { DetailsService } from '../../services/details/details.service';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { CustomLoader, GetLang } from '../../translations/index';
import {MatDialogModule} from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';
@NgModule({
  declarations: [DetailsComponent, ModalComponent],
  imports: [
    CommonModule,
    DetailsRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    TranslateModule.forRoot(),
    TranslateModule.forChild({
      defaultLanguage: GetLang(),
      loader: {
        provide: TranslateLoader,
        useClass: CustomLoader
      },
    }),
  ], providers: [
    DetailsService,
    HttpClientModule,
    HttpClient,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: DetailsInterceptor,
      multi: true
    }
  ]
})
export class DetailsModule { }
