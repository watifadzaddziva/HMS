import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,) { }


  loginUserFromServer(user :User):Observable<User>{
    return this.http.post<User>("http://192.168.10.146:8080/login",user)
 
}
      
  registerUserFromServer(user :User):Observable<User>{ 
    return this.http.post<User>("http://192.168.10.146:8080/register",user);
  }
}
