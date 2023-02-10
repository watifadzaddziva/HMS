import { Component, EventEmitter, Injector, Input, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { DoctorsFields } from '../../fields/doctors.fields';

@Component({
  selector: 'app-set-doctors',
  templateUrl: './set-doctors.component.html',
  styleUrls: ['./set-doctors.component.css']
})
export class SetDoctorsComponent {

  visible = false;
  form = new FormGroup({});
  fields !: FormlyFieldConfig[];
  @Input() doctor!: any;
  @Output() output = new EventEmitter();
  fileList: any = [];
  options: any;


  constructor( 
    private notification: NzNotificationService, private injector: Injector) {
  }

  ngOnInit(): void {
    this.fields = DoctorsFields();
  }

  ngOnChanges() {
    this.doctor = { ...this.doctor };
    this.fields = DoctorsFields();
  }

  toggle(visible: boolean): void {
    this.visible = visible;
  }

 
submit() {
  if (this.form.valid) {
  //   var svc;
  //   this.employee.id ? svc = this.defaultService.updateEmployee(this.employee.id, this.employee) : 
  //   svc = this.defaultService.createEmployee( this.employee);
  //   svc.subscribe(res => {
  //     this.notification.success('Saved', 'Employee Saved Successfully!', { nzDuration: 10000 });
  //     this.output.emit(res);
  //     this.toggle(false);
  //     console.log(res)
  //     this.fileList = []
  //   });
  }
}


}
