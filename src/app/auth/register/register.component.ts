import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  implements OnInit{

  gender = 'male'
  user = new User();
  options = [
    { label: 'male', value: 'male' },
    { label: 'female', value: 'female' },
  ];

  inputValue: string | null = null;
  textValue: string | null = null;
  passwordVisible = false;
  password?: string;
  registrationForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService,
    private notification : NzNotificationService,
    private router: Router) {}

  ngOnInit(): void {

    // this.registrationForm = new FormGroup({
    //   firstName: new FormControl('',[Validators.required]),
    //   lastName: new FormControl('',[Validators.required]),
    //   dateOfBirth: new FormControl('',[Validators.required]),
    //   email: new FormControl('',[Validators.email, Validators.required]),
    //   phoneNumber: new FormControl('',[Validators.required]),
    //   password: new FormControl('',[Validators.required, Validators.minLength(5)]),
    //   checkPassword: new FormControl('', [Validators.required, this.confirmationValidator]),
    //   address: new FormControl('',[Validators.required]),
    //   gender: new FormControl('',[Validators.required]),
    // });
   this.registrationForm = this.fb.group({
    firstName: [null, [Validators.required]],
    lastName: [null, [Validators.required]],
    dateOfBirth: [null, [Validators.required]],
    email: [null, [Validators.email, Validators.required]],
    phoneNumber: [null, [Validators.required]],
    password: [null, [Validators.required, Validators.minLength(5)]],
    checkPassword: [null, [Validators.required, this.confirmationValidator]],
    address: [null, [Validators.required]],
    gender: [null, [Validators.required]],

   })
  }


  submitForm(){
    if (this.registrationForm.valid) {
      this.authService.registerUserFromServer(this.user).subscribe((res)=>{
        this.router.navigate(['/login'])
        console.log(this.registrationForm.value)
        
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
