import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorsPagesComponent } from './pages/doctors-pages/doctors-pages.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { PatientsPageComponent } from './pages/patients-page/patients-page.component';
import { SpecializationPageComponent } from './pages/specialization-page/specialization-page.component';

const routes: Routes = 
[
  {path: '', component: LayoutComponent, children:[
    {path: 'main', component: DoctorsPagesComponent},
    {path : 'doctors', component: DoctorsPagesComponent},
    {path : 'patients', component: PatientsPageComponent},
    {path : 'specialization', component: SpecializationPageComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
