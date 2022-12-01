import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ETwoAwayComponent } from './e-two-away.component';

describe('ETwoAwayComponent', () => {
  let component: ETwoAwayComponent;
  let fixture: ComponentFixture<ETwoAwayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ETwoAwayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ETwoAwayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
