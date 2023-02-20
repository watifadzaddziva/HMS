import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { DefaultService } from '../../services/default.service';

@Component({
  selector: 'app-specialization-details',
  templateUrl: './specialization-details.component.html',
  styleUrls: ['./specialization-details.component.css']
})
export class SpecializationDetailsComponent {

  specialization !: any;
  specializationList!: any
  specializationDetails!: any
  doctors: [] = [];
  id!: number;

  constructor(
    private route: ActivatedRoute,
    private notify: NzNotificationService,
    private defaultService: DefaultService,
  ) {
  
  }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];

    
    this.defaultService.getAllSpecialization().subscribe(
      (data)=>{
       this.specializationList= data.content
       this.defaultService.getSpecializationById(this.id).subscribe(data=>{
        console.log(data);
        this.specializationDetails=data
  
      })
      });

  
  }

 

 


}
