import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MTemplateValiableComponent } from './m-template-valiable.component';

describe('MTemplateValiableComponent', () => {
  let component: MTemplateValiableComponent;
  let fixture: ComponentFixture<MTemplateValiableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MTemplateValiableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MTemplateValiableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
