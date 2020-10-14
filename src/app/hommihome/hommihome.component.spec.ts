import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HommihomeComponent } from './hommihome.component';

describe('HommihomeComponent', () => {
  let component: HommihomeComponent;
  let fixture: ComponentFixture<HommihomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HommihomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HommihomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
