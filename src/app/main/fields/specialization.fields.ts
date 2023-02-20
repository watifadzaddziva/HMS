import { FormlyFieldConfig } from '@ngx-formly/core';

export const specializationFields = function get(): FormlyFieldConfig[] {
  return [
    
    {
      key: 'name',
      type: 'input',
      templateOptions: {
        label: ' Name',
        placeholder: 'Enter Specialization name',
        required: true,
      }
    },
   
    {
      key: 'description',
      type: 'input',
      templateOptions: {
        label: ' Description',
        placeholder: 'Enter Description',
        required: true,
      }
    },
   
  ]
}