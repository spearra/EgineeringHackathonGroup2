import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Meat } from './meat';

describe('Meat', () => {
  let component: Meat;
  let fixture: ComponentFixture<Meat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Meat]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Meat);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
