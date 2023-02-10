import { FormlyFieldConfig } from '@ngx-formly/core';

export const chatroomFields = function get(): FormlyFieldConfig[] {
  return [
    
    {
      key: 'groupName',
      type: 'input',
      templateOptions: {
        label: ' Name',
        placeholder: 'Enter chatroom name',
        required: true,
      }
    },
   
  ]
}