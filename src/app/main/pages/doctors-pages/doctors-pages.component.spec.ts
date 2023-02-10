import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsPagesComponent } from './doctors-pages.component';

describe('DoctorsPagesComponent', () => {
  let component: DoctorsPagesComponent;
  let fixture: ComponentFixture<DoctorsPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorsPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorsPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
