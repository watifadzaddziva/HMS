import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NzCardModule} from "ng-zorro-antd/card";
import {NzTableModule} from "ng-zorro-antd/table";
import {NzTagModule} from "ng-zorro-antd/tag";
import {NzDrawerModule} from "ng-zorro-antd/drawer";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzModalModule} from "ng-zorro-antd/modal";
import {NzAvatarModule} from "ng-zorro-antd/avatar";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzTabsModule} from "ng-zorro-antd/tabs";
import {NzCheckboxModule} from "ng-zorro-antd/checkbox";
import {NzDropDownModule} from "ng-zorro-antd/dropdown";
import {NzRadioModule} from "ng-zorro-antd/radio";
import {NzUploadModule} from "ng-zorro-antd/upload";
import {NzBadgeModule} from "ng-zorro-antd/badge";
import {NzEmptyModule} from "ng-zorro-antd/empty";
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';


@NgModule({
  declarations: [],
  exports:[    
    NzCardModule,
    NzTableModule,
    NzTagModule,
    NzDrawerModule,
    NzFormModule,
    NzInputModule,
    NzModalModule,
    NzAvatarModule,
    NzIconModule,
    NzButtonModule,
    NzTabsModule,
    NzCheckboxModule,
    NzDropDownModule,
    NzRadioModule,
    NzUploadModule,
    NzBadgeModule,
    NzEmptyModule,
    NzLayoutModule,
   NzDatePickerModule,
     NzPopconfirmModule,
     NzSelectModule,
     NzTimePickerModule,
    //  NgxIntlTelInputModule


],

  imports: [
    CommonModule,


  ]
})
export class SharedModule {}
