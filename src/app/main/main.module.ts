import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { SetDoctorsComponent } from './components/set-doctors/set-doctors.component';
import { DoctorsPagesComponent } from './pages/doctors-pages/doctors-pages.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { PatientsPageComponent } from './pages/patients-page/patients-page.component';
import { AppointmentsPageComponent } from './pages/appointments-page/appointments-page.component';
import { SpecializationPageComponent } from './pages/specialization-page/specialization-page.component';
import { SetSpecializationComponent } from './components/set-specialization/set-specialization.component';
import { SetAppointmentComponent } from './components/set-appointment/set-appointment.component';
import { SpecializationDetailsComponent } from './pages/specialization-details/specialization-details.component';


@NgModule({
  declarations: [
    SetDoctorsComponent,
    DoctorsPagesComponent,
    LayoutComponent,
    PatientsPageComponent,
    AppointmentsPageComponent,
    SpecializationPageComponent,
    SetSpecializationComponent,
    SetAppointmentComponent,
    SpecializationDetailsComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule,
    FormlyModule,
    

    
  ]
})
export class MainModule { }
