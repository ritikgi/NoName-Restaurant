import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWorkoutComponent } from './home-workout.component';

describe('HomeWorkoutComponent', () => {
  let component: HomeWorkoutComponent;
  let fixture: ComponentFixture<HomeWorkoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeWorkoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeWorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
