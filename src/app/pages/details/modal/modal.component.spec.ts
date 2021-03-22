import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalComponent } from './modal.component';
import { MatDialogModule, MAT_DIALOG_DATA , MatDialogRef} from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DetailsRoutingModule } from '../details.routing';
import { DetailsService } from '../../../services/details/details.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { CustomLoader, GetLang } from '../../../translations/index';


describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalComponent],
      imports: [
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
      ],
      providers: [{ provide: MAT_DIALOG_DATA, useValue: {} },
      { provide: MatDialogRef, useValue: {} }]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
