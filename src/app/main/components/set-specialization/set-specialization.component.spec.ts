import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetSpecializationComponent } from './set-specialization.component';

describe('SetSpecializationComponent', () => {
  let component: SetSpecializationComponent;
  let fixture: ComponentFixture<SetSpecializationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetSpecializationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetSpecializationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
