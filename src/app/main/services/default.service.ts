import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Appointment } from 'src/app/models/appointment';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class DefaultService {

  baseUrl = 'http://54.156.63.145:8085'

  constructor(private http: HttpClient, private router: Router) { }


  createDoctors(data: User): Observable<any>{
    return  this.http.post(`${this.baseUrl}/admin/createDoctor`, data)
  }

  getDoctorById(id: number): Observable<User>{
    return this.http.get<User>(`${this.baseUrl}/admin/getById/${id}`)
  }
  updateDoctor(id: number, data: any ): Observable<any>{
    return this.http.put<any>(`${this.baseUrl}/admin/updateDoctorInformation/${id}`, data)
  }
  getAllDoctors(): Observable<any>{
    return this.http.get(`${this.baseUrl}/admin/geListOfAllDoctors`)
      }

      deleteDoctor(id: number):Observable<any>{
        return this.http.delete<any>(`${this.baseUrl}/admin/deleteDoctor/${id}`)
    
      }
      
      getAllPatients(){
        return this.http.get(`${this.baseUrl}/admin/getListOfAllPatients`)
      }


  getSpecializationById(id: number):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/specialisation/list/${id}`)
  }
      getAllSpecialization(): Observable<any>{
        return this.http.get(`${this.baseUrl}/specialisation/specialisations`)
      }

      createSpecialization(data: any): Observable<any>{
        return  this.http.post(`${this.baseUrl}/specialisation/create`, data)
      }
      updateSpecialization(id: number, data: any ): Observable<any>{
        return this.http.put<any>(`${this.baseUrl}/update/${id}`, data)
      }



      createAppointment(data: any): Observable<any>{
        return this.http.post(`${this.baseUrl}/appointment/create`, data)
      }

      getAllAppointments(): Observable <any>{
        return this.http.get(`${this.baseUrl}/appointment/getAllAppointments`)
      }

      confirmAppointment(id : number, data: Appointment): Observable <any>{
        return this.http.put<any>(`${this.baseUrl}/appointment/confirmAppointment/${id}`, data)
      }

      denyAppointment(id : number, data: any): Observable <any>{
        return this.http.put<any>(`${this.baseUrl}/appointment/confirmAppointment/${id}`, data)
      }
}
