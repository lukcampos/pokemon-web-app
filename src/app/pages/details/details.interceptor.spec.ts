import { TestBed } from '@angular/core/testing';

import { DetailsInterceptor } from './details.interceptor';

describe('DetailsInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      DetailsInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: DetailsInterceptor = TestBed.inject(DetailsInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
