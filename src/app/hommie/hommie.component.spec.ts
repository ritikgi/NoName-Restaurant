import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HommieComponent } from './hommie.component';

describe('HommieComponent', () => {
  let component: HommieComponent;
  let fixture: ComponentFixture<HommieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HommieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HommieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
