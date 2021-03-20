import { TestBed } from '@angular/core/testing';

import { CardlistInterceptor } from './cardlist.interceptor';

describe('CardlistInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      CardlistInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: CardlistInterceptor = TestBed.inject(CardlistInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
