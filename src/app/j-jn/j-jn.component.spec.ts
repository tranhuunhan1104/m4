import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JJnComponent } from './j-jn.component';

describe('JJnComponent', () => {
  let component: JJnComponent;
  let fixture: ComponentFixture<JJnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JJnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JJnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
