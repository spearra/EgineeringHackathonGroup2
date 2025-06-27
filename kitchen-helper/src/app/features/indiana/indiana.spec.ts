import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Indiana } from './indiana';

describe('Indiana', () => {
  let component: Indiana;
  let fixture: ComponentFixture<Indiana>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Indiana]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Indiana);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
