import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetDoctorsComponent } from './set-doctors.component';

describe('SetDoctorsComponent', () => {
  let component: SetDoctorsComponent;
  let fixture: ComponentFixture<SetDoctorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetDoctorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
