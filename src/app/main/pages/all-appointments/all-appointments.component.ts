import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DefaultService } from '../../services/default.service';

@Component({
  selector: 'app-all-appointments',
  templateUrl: './all-appointments.component.html',
  styleUrls: ['./all-appointments.component.css']
})
export class AllAppointmentsComponent implements OnInit {

  appointments!: any

  constructor(private defaultService: DefaultService,private router : Router){

  }
  ngOnInit(): void {
  this.load();
  }



  load( event?: number): void {
    this.defaultService.getAllAppointments().subscribe((res)=>{
      this.appointments= res
     })
  }

  reload(event : any){
    this.load(event)
    this.appointments = {}
  }

  
}
