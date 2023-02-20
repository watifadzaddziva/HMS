import {
  Component,
  EventEmitter,
  Injector,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { LoginComponent } from 'src/app/auth/login/login.component';
import { Appointment } from 'src/app/models/appointment';
import { AppointmentFields } from '../../fields/set-appointment.fields';
import { DefaultService } from '../../services/default.service';

@Component({
  selector: 'app-set-appointment',
  templateUrl: './set-appointment.component.html',
  styleUrls: ['./set-appointment.component.css'],
})
export class SetAppointmentComponent implements OnInit {
  docId:any
  constructor(
    private defaultService: DefaultService,
    private notification: NzNotificationService,
    private injector: Injector,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  form !: FormGroup;
  patientAppointment = new Appointment();
  fields!: FormlyFieldConfig[];
  @Input() appointment!: any;
  @Output() output = new EventEmitter();
  fileList: any = [];
  options: any;
  specializationDetails!: any;
  doctors: [] = [];
  specializationList: any;
  id!: any;
  time: Date | null = null;

  ngOnInit(): void {
    this.fields= AppointmentFields();

    this.form = this.fb.group({
      specialisationId: [null, [Validators.required]],
        doctorId: [null, [Validators.required]],
        appointmentDate: [null, [Validators.required]],
        appointmentTime: [null, [Validators.required]],
         })

    this.getSpecializationList();
    

    this.id = this.route.snapshot.params['id'];
  }

  ngOnChanges() {
    this.appointment = { ...this.appointment };
    this.fields= AppointmentFields();
   
  }

  submit() {
    if (this.form.valid) {
      var svc;
      const datatoSend =this.form.value;
      const user=JSON.parse(sessionStorage.getItem('user') ?? '{}')  
      datatoSend.patientId=user.id;   
      svc = this.defaultService.createAppointment(datatoSend);
      svc.subscribe((res) => {
        this.notification.success('', 'Appointment created Successfully!', {
          nzDuration: 10000, });
        this.output.emit(res);
        this.fileList = [];
      });
    }
  }

  getSpecializationList() {
    this.defaultService.getAllSpecialization().subscribe((res) => {
      console.log(res);
      this.specializationList = res
      this.docId=res.id
     
    });
  }
  getDoctors(event:any) {
    this.defaultService.getAllSpecialization().subscribe((data) => {
      this.specializationList = data.content;
      this.defaultService.getSpecializationById(this.form.value.specialisationId).subscribe((data) => {
        console.log(data);
        this.specializationDetails = data;
      });
    });
  }
}
