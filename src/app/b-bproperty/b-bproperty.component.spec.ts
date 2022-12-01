import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BBpropertyComponent } from './b-bproperty.component';

describe('BBpropertyComponent', () => {
  let component: BBpropertyComponent;
  let fixture: ComponentFixture<BBpropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BBpropertyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BBpropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
