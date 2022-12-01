import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CCclassComponent } from './c-cclass.component';

describe('CCclassComponent', () => {
  let component: CCclassComponent;
  let fixture: ComponentFixture<CCclassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CCclassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CCclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
