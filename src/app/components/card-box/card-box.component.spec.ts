import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardBoxComponent } from './card-box.component';
import { } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { RouterTestingModule } from '@angular/router/testing';
import { mock } from '../../pages/card-list/data/mock'
describe('CardBoxComponent', () => {
  let component: CardBoxComponent;
  let fixture: ComponentFixture<CardBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardBoxComponent],
      imports: [
        MatCardModule,
        MatChipsModule,
        LazyLoadImageModule,
        RouterTestingModule
      ],
    })
      .compileComponents();


  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardBoxComponent);
    component = fixture.componentInstance;
    component.card = mock
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
