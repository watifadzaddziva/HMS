import { Component, EventEmitter, Injector, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import {  specializationFields } from '../../fields/specialization.fields';
import { DefaultService } from '../../services/default.service';

@Component({
  selector: 'app-set-specialization',
  templateUrl: './set-specialization.component.html',
  styleUrls: ['./set-specialization.component.css']
})
export class SetSpecializationComponent implements OnInit {

  visible = false;
  form = new FormGroup({});
  fields !: FormlyFieldConfig[];
  @Input() specialization!: any;
  @Output() output = new EventEmitter();
  fileList: any = [];

   
  ngOnInit(): void {
  }


  constructor( private notification: NzNotificationService, private injector: Injector,
    private defaultService: DefaultService) {
  }

  ngOnChanges() {
    this.specialization = { ...this.specialization };
    this.fields = specializationFields();
  }

  toggle(visible: boolean): void {
    this.visible = visible;
  }

  submit() {
    if (this.form.valid) 
      var svc;
      // this.specialization.id? svc = this.defaultService.updateSpecialization(this.specialization.id, this.specialization)  
    // :
     svc = this.defaultService.createSpecialization(this.specialization);
      svc.subscribe(res => {
        this.notification.success('Saved', 'Specialization Saved Successfully!', { nzDuration: 10000 });
        this.output.emit(res);
        this.toggle(false);
        this.fileList = []
      });
    }
  }

