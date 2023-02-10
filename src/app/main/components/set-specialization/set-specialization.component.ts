import { Component, EventEmitter, Injector, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { chatroomFields } from '../../fields/specialization.fields';

@Component({
  selector: 'app-set-specialization',
  templateUrl: './set-specialization.component.html',
  styleUrls: ['./set-specialization.component.css']
})
export class SetSpecializationComponent implements OnInit {

   
  ngOnInit(): void {
  }


  visible = false;
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

  constructor( private notification: NzNotificationService, private injector: Injector) {
  }

  ngOnChanges() {
    this.chatroom = { ...this.chatroom };
    this.fields = chatroomFields();
  }

  toggle(visible: boolean): void {
    this.visible = visible;
  }

  submit() {
    // if (this.form.valid) {
    //   const dataToSend = this.chatroom;
    //   dataToSend.members=[]
    //   var svc;
    //   this.chatroom.groupId? svc = this.service.updateToUrl(`${this.url}updateChatroom/${this.chatroom.groupId}`,dataToSend)
      
    // : svc = this.service.postToUrl(`${this.url}addGroups`, dataToSend);
    //   svc.subscribe(res => {
    //     this.notification.success('Saved', 'Chatroom Saved Successfully!', { nzDuration: 10000 });
    //     this.output.emit(res);
    //     this.toggle(false);
    //     this.fileList = []
    //   });
    // }
  }



}
