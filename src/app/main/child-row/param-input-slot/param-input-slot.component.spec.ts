import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamInputSlotComponent } from './param-input-slot.component';

describe('ParamInputSlotComponent', () => {
  let component: ParamInputSlotComponent;
  let fixture: ComponentFixture<ParamInputSlotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParamInputSlotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamInputSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
