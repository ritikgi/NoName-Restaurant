import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminnnnComponent } from './adminnnn.component';

describe('AdminnnnComponent', () => {
  let component: AdminnnnComponent;
  let fixture: ComponentFixture<AdminnnnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminnnnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminnnnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
