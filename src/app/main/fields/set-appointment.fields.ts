import { FormlyFieldConfig } from '@ngx-formly/core';
import { User } from 'src/app/models/user';

export const AppointmentFields = function get(user?: User): FormlyFieldConfig[] {
    return [

      {
        key: 'appointmentDate',
        type: 'input',
        props: {
          label: 'Date',
          placeholder: 'Select Date',
          type: 'date',
          required: true,
          
        },
      },

      {
        key: 'appointmentTime',
        type: 'input',
        props: {
          label: 'Time',
          placeholder: 'Enter name',
          type: 'time',
          required: true,
          
        },
       
      },
    ]


  }

