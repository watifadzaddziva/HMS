import { Component, EventEmitter, Injector, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-specialization-page',
  templateUrl: './specialization-page.component.html',
  styleUrls: ['./specialization-page.component.css']
})
export class SpecializationPageComponent implements OnInit {

  visible = false;
  chatrooms!: any
  form = new FormGroup({});
  url = `/chatroom/`;
  fields !: FormlyFieldConfig[];
  @Input() chatroom!: any;
  @Output() output = new EventEmitter();
  fileList: any = [];
  previewImage: string | undefined = '';
  previewVisible = false;
  uploading = false;
  baseUrl: any;

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
    this.chatroom = {}
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

