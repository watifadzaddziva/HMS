import { Component, Injector, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { User } from 'src/app/models/user';
import { DefaultService } from '../../services/default.service';

@Component({
  selector: 'app-doctors-pages',
  templateUrl: './doctors-pages.component.html',
  styleUrls: ['./doctors-pages.component.css']
})
export class DoctorsPagesComponent implements OnInit {

  doctors!: any;
  page = 1;
  baseUrl!: string;
  visible!: boolean;
  doctor  ={}
  viewId !: any;
  id!: User;

  constructor( 
    private injector: Injector, private nzMessageService: NzMessageService,
    private defaultService: DefaultService) {
  }

  ngOnInit(): void {
    this.load();
   
  }

 
 

  toggle(visible: boolean): void {
    this.visible = visible;
  }

  load( event?: number): void {
    this.defaultService.getAllDoctors().subscribe((res)=>{
      this.doctors= res
     })
  }

  reload(event : any){
    this.load(event)
    this.doctor = {}
  }

  confirm(id: number): void {
    this.defaultService.deleteDoctor(id).subscribe(() => {
      this.nzMessageService.info('doctor has been deleted');
      this.load();
    });
  }

  
}


export interface Audit {
  createdDate: string;
  modifiedDate: string;
  createdBy?: any;
  modifiedBy?: any;
}

export interface Employees {
  id: number;
  firstname: string;
  lastName: string;
  gender: string;
  dateOfBirth: string;
  email: string;
  audit: Audit;
}