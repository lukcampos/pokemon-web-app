import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CardListComponent } from './card-list.component';
import { TranslateModule, TranslateService, TranslateStore } from '@ngx-translate/core';
import { MatToolbarModule } from '@angular/material/toolbar';
describe('CardListComponent', () => {
  let component: CardListComponent;
  let fixture: ComponentFixture<CardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardListComponent],
      imports: [
        HttpClientTestingModule,
        TranslateModule.forRoot(),
        MatToolbarModule
      ],
      providers: [
        TranslateService,
        TranslateStore
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
