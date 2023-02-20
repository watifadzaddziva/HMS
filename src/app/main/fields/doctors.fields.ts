import { FormlyFieldConfig } from '@ngx-formly/core';

export const DoctorsFields = function get(specializationList: Array<any>): FormlyFieldConfig[] {
    return [
      {
        key: 'firstName',
        type: 'input',
        templateOptions: {
          label: 'First Name',
          placeholder: 'Enter name',
          required: true,
        }
      },
      {
        key: 'lastName',
        type: 'input',
        templateOptions: {
          label: 'Last Name',
          placeholder: 'Enter surname',
          required: true,
        }
      },

      {
        key: 'email',
        type: 'input',
        templateOptions: {
          label: 'Email',
          placeholder: 'Enter email',
          required: true,
        }
      },
      
  
  
     
      {
        key: 'gender',
        type: 'select',
        templateOptions: {
          label: 'Gender',
          placeholder: 'select gender',
          required: true,
          options: [
            { value: 'Female', label: 'Female' },
            { value: 'Male', label: 'Male' },
           
          ]
        }
      },
  
      {
        key: 'dateOfBirth',
        type: 'input',
        templateOptions: {
          label: 'Date Of Birth',
          placeholder: 'Enter Date Of Birth',
          type: 'date',
          required: true,
        }
      },
      {
        key: 'phoneNumber',
        type: 'input',
        templateOptions: {
          label: 'Phone Number',
          placeholder: 'Enter Phone Number',
          required: true,
        }
      },

      {
        key: 'specialisationId',
        type: 'select',
        templateOptions: {
          label: 'Specialization',
          placeholder: 'select specialization',
          options: specializationList,
          // multiple: true,
          required: true,
        }
      },

  
     
      
    ]
  }
  