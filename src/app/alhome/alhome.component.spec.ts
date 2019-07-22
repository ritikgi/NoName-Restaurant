import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlhomeComponent } from './alhome.component';

describe('AlhomeComponent', () => {
  let component: AlhomeComponent;
  let fixture: ComponentFixture<AlhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
