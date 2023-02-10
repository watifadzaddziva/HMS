import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { MembersFields } from '../../fields/doctors-in-a-specialization.fields';

@Component({
  selector: 'app-specialization-details',
  templateUrl: './specialization-details.component.html',
  styleUrls: ['./specialization-details.component.css']
})
export class SpecializationDetailsComponent {
  @Input() groupId!: number;
  chatroom !: any;
  members: [] = [];
  member = {} ;
  @Output() output = new EventEmitter();
  membersToAdd: any[] = [];
  visible!: boolean;
  memberName: any[] = [];
  form = new FormGroup({});
  fields!: FormlyFieldConfig[];
  page = 1;
  paginated!: any;
  fileList: any = [];

  constructor(
    private router: ActivatedRoute,
    private notify: NzNotificationService
  ) {
    // this.groupId = this.router.snapshot.params.id;
  }

  ngOnInit(): void {
    this.fields = MembersFields(this.membersToAdd);
    this.getChatroom(this.groupId);
    this.getChatroomMembers();
    this.getMembersList();
    this.getAllChatrooms();
  }

  getChatroom(groupId: any) {
    // this.service.get(`chatroom/getGroupById/${groupId}`).subscribe((result) => {
    //   console.log(result);
    //   this.chatroom = result;
    // });
  }

  add(): void {
    // this.member = {} as Member;
    this.toggle(true);
  }

  toggle(visible: boolean): void {
    this.visible = visible;
  }
  submit() {

    // const dataToSend = this.form.value;
    // this.service
    //   .postToUrl(`/chatroom/add-member/${this.groupId}`, dataToSend)
    //   .subscribe((res) => {
    //     this.notify.success('Members Added', res.message);
    //     this.getChatroom(this.groupId);
    //     this.toggle(false);
    //     this.fileList = [];

    //     this.getChatroomMembers();
    //   });
  }
  getMembersList() {
    // this.service.get(`/member?pageNumber=${this.page - 1}`).subscribe((res) => {
    //   this.membersToAdd = res.content.map((l: any) => {
    //     return { label: l.firstName, value: l.id };
    //   });
    //   this.fields = MembersFields(this.membersToAdd);
    // });
  }
  getChatroomMembers() {
    // this.service
    //   .get(`/chatroom/getGroupWithMembers/${this.groupId}`)
    //   .subscribe((res) => {
    //     this.members = res.member;
    //   });
  }
  deleteMember(member : any): void {
 
    // this.service.delete(`/chatroom/remove-member-in-group/${this.groupId}/${member.id}`).subscribe(() => {
    //   this.notify.success('member deleted successfully', '');
    //   this.getChatroomMembers();
    // });
  }


  getAllChatrooms(){
  //   this.service.get(`/chatroom`).subscribe((res)=>{
  //     console.log(res)
  //   })
  }

}
