import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightTraningComponent } from './weight-traning.component';

describe('WeightTraningComponent', () => {
  let component: WeightTraningComponent;
  let fixture: ComponentFixture<WeightTraningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeightTraningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeightTraningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
