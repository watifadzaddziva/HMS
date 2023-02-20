import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Appointment } from 'src/app/models/appointment';
import { DefaultService } from '../../services/default.service';

@Component({
  selector: 'app-pending-appointments',
  templateUrl: './pending-appointments.component.html',
  styleUrls: ['./pending-appointments.component.css']
})
export class PendingAppointmentsComponent implements OnInit {

  pendingAppointments!: any
  id!: number
  appointment!: Appointment;

  constructor(private defaultService: DefaultService, private router : Router,
    private notification : NzNotificationService){

  }
 
  ngOnInit(): void {
    this.load();
    }
  
  
  
    load( event?: number): void {
      this.defaultService.getAllAppointments().subscribe((res)=>{
        this.pendingAppointments= res
        console.log(res)
       })
    }
  
    reload(event : any){
      this.load(event)
      this.pendingAppointments = {}
    }
  
    confirmAppointment(id: number){
      this.defaultService.confirmAppointment(id,this.appointment).subscribe(res=>{
       this.notification.success("appointment has been confirmed ","")
       this.ngOnInit();
      })
    }
  
    denyAppointment(id: number): void {
      this.defaultService.denyAppointment(id,this.appointment).subscribe(res=>{
        this.notification.error("appointment has been declined ","")
        this.ngOnInit();
       })
    }

}
