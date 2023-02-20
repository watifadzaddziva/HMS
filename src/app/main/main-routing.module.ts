import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllAppointmentsComponent } from './pages/all-appointments/all-appointments.component';
import { AppointmentsPageComponent } from './pages/appointments-page/appointments-page.component';
import { DoctorDetailsComponent } from './pages/doctor-details/doctor-details.component';
import { DoctorsPagesComponent } from './pages/doctors-pages/doctors-pages.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { PatientDetailsComponent } from './pages/patient-details/patient-details.component';
import { PatientsPageComponent } from './pages/patients-page/patients-page.component';
import { PendingAppointmentsComponent } from './pages/pending-appointments/pending-appointments.component';
import { SpecializationDetailsComponent } from './pages/specialization-details/specialization-details.component';
import { SpecializationPageComponent } from './pages/specialization-page/specialization-page.component';

const routes: Routes = 
[
  {path: '', component: LayoutComponent, children:[
    {path: 'main', component: DoctorsPagesComponent},
    {path : 'doctors', component: DoctorsPagesComponent},
    {path : 'patients', component: PatientsPageComponent},
    {path: 'appointment', component: AppointmentsPageComponent},
    {path : 'all-appointments', component: AllAppointmentsComponent},
    {path : 'specialization', component: SpecializationPageComponent},
    {path : '', component: SpecializationPageComponent},
    {path : 'pending-appointments', component: PendingAppointmentsComponent},
    {path : 'specialization-details/:id', component: SpecializationDetailsComponent},
    {path : 'patient-details/:id', component: PatientDetailsComponent},
    {path : 'doctor-details/:id', component: DoctorDetailsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
