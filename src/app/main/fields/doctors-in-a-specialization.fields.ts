import { FormlyFieldConfig } from '@ngx-formly/core';
export const MembersFields = function (membersList:Array<any>, groupName?: Array<any>): FormlyFieldConfig[] {

    
    return [
      
      {
        key: 'memberId',
        type: 'select',
        templateOptions: {
            label: 'Members',
            options: membersList,
            multiple: true,
            required: true,

        }
    },
    ]
}
