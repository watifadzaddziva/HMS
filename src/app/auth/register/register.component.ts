import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, UntypedFormBuilder, UntypedFormControl, Validators } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  implements OnInit{

  user = new User();
  options = [
    { label: 'Male', value: 'Male' },
    { label: 'Female', value: 'Female' },
  ];

  inputValue: string | null = null;
  textValue: string | null = null;
  passwordVisible = false;
  password?: string;
  separateDialCode = false;
	SearchCountryField = SearchCountryField;
	CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
	preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];

  registrationForm!: FormGroup;

  constructor(private fb: UntypedFormBuilder, private authService: AuthService,
    private notification : NzNotificationService,
    private router: Router) {}

  ngOnInit(): void {

   this.registrationForm = this.fb.group({
    firstName: [null, [Validators.required]],
    lastName: [null, [Validators.required]],
    dateOfBirth: [null, [Validators.required]],
    email: [null, [Validators.email, Validators.required]],
    phoneNumber: [null, [Validators.required]],
    password: [null, [Validators.required, Validators.minLength(5),Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{6,}')]],
    checkPassword: [null, [Validators.required, this.confirmationValidator]],
    address: [null, [Validators.required]],
    gender: [null, [Validators.required]],

   })
  }


  submitForm(){
    if (this.registrationForm.valid) {
      const dataToSend= this.registrationForm.value
      dataToSend.dateOfBirth= new Date(dataToSend.dateOfBirth).toLocaleDateString();
      this.authService.registerUserFromServer(dataToSend).subscribe((res)=>{
        this.notification.success("Registered Succescfully" ,"")
        this.router.navigate(['/login'])

        
      })
      
    } else {
      Object.values(this.registrationForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  changePreferredCountries() {
		this.preferredCountries = [CountryISO.India, CountryISO.Canada];
	}

  updateConfirmValidator(): void {
    Promise.resolve().then(() => this.registrationForm.controls['checkPassword'].updateValueAndValidity());
  }


  confirmationValidator = (control: UntypedFormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.registrationForm.controls['password'].value) {
      return { confirm: true, error: true };
    }
    return {};
  };
}
