import { Component, Injector, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

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

  constructor( 
    private injector: Injector, private nzMessageService: NzMessageService) {
  }

  ngOnInit(): void {
    this.getEmployees();
    this.load();
   
  }

  getEmployees(): void {
  //  this.defaultService.getAllEmployees().subscribe((res)=>{
  //   this.employees= res.content
  //  })
  }

 

  toggle(visible: boolean): void {
    this.visible = visible;
  }

  load( event?: number): void {
    // this.defaultService.getAllEmployees().subscribe((res)=>{
    //   this.employees= res.content
    //  })
  }

  reload(event : any){
    this.load(event)
    this.doctor = {}
  }

  confirm(id: number): void {
    // this.defaultService.deleteEmployee(id).subscribe(() => {
    //   this.nzMessageService.info('employee has been deleted');
    //   this.getEmployees();
    //   this.load();
    // });
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