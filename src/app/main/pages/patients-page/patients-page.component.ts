import { Component, Injector } from '@angular/core';
import { DefaultExport } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { DefaultService } from '../../services/default.service';

@Component({
  selector: 'app-patients-page',
  templateUrl: './patients-page.component.html',
  styleUrls: ['./patients-page.component.css']
})
export class PatientsPageComponent {
  patients !: any;
  page = 1;
  baseUrl!: string;
  visible!: boolean;
  doctor  ={}
  viewId !: any;

  constructor( 
    private injector: Injector, private nzMessageService: NzMessageService,
    private defaultService:DefaultService ) {
  }

  ngOnInit(): void {
    this.load();
   
  }

 

  toggle(visible: boolean): void {
    this.visible = visible;
  }

  load( event?: number): void {
    this.defaultService.getAllPatients().subscribe((res)=>{
      this.patients= res
     })
  }

  reload(event : any){
    this.load(event)
    this.doctor = {}
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

