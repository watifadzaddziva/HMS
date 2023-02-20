import { Component, EventEmitter, Injector, Input, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { DoctorsFields } from '../../fields/doctors.fields';
import { DefaultService } from '../../services/default.service';

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
  specializationList: any;


  constructor( 
    private notification: NzNotificationService, private injector: Injector,
    private defaultService: DefaultService) {
  }

  ngOnInit(): void {
    this.getSpecializationList();
    this.fields = DoctorsFields(this.specializationList);
  }

  ngOnChanges() {
    this.doctor = { ...this.doctor };
    this.fields = DoctorsFields(this.specializationList);
  }

  toggle(visible: boolean): void {
    this.visible = visible;
  }

 
submit() {
  if (this.form.valid) {
    var svc;
    this.doctor.id ? svc = this.defaultService.updateDoctor(this.doctor.id, this.doctor) : 
    svc = this.defaultService.createDoctors( this.doctor);
    svc.subscribe(res => {
      this.notification.success('Saved', 'Doctor Saved Successfully!', { nzDuration: 10000 });
      this.output.emit(res);
      this.toggle(false);
      console.log(res)
      this.fileList = []
    });
  }
}

getSpecializationList(){
  this.defaultService.getAllSpecialization().subscribe((res)=>{
    console.log(res)
     this.specializationList = res.map((specialist: any)=>{
      return {label: specialist.name, value: specialist.id}
     });
    this.fields = DoctorsFields(this.specializationList)

  })
}


}
