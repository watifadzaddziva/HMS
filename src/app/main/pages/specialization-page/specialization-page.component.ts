import { Component, EventEmitter, Injector, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { DefaultService } from '../../services/default.service';

@Component({
  selector: 'app-specialization-page',
  templateUrl: './specialization-page.component.html',
  styleUrls: ['./specialization-page.component.css']
})
export class SpecializationPageComponent implements OnInit {

  visible = false;
  // chatrooms!: any
  form = new FormGroup({});
  fields !: FormlyFieldConfig[];
  @Input() specialization!: any;
  @Output() output = new EventEmitter();
  fileList: any = [];
  data!: any;

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
    this.defaultService.getAllSpecialization().subscribe((res)=>{
      this.data = res
    })
  }

  reload(event : any){
    this.load(event)
    this.specialization = {}
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

