import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, UntypedFormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit{
static NAME='token';
  constructor(private fb: UntypedFormBuilder,  private router : Router,
    private authService: AuthService, private route : ActivatedRoute,
    private notification : NzNotificationService,
    public jwtHelper : JwtHelperService){}

  ngOnInit(): void {

 
  }

  user  = new User();
  rememberMe= false;
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });


  submitForm() {
    this.authService.loginUserFromServer(this.user).subscribe((res)=>{
      console.log(res)
      sessionStorage.setItem('token',res.token)
      sessionStorage.setItem('user',JSON.stringify(res));
      this.authService.saveToken('token')
      this.router.navigate(['main'])

    }, error=>{
      this.notification.error("","bad credentials")
    })
    
   
   }
   
 
}
