import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, Subject } from 'rxjs';
import { TokenPayload } from '../models/token-payload';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  

  baseUrl= 'http://54.156.63.145:8085/user';
  // static NAME = 'token';
  static TOKEN: string;
  public token!: string;
  tokenPayload: TokenPayload | undefined;
  username!: string;
  userAction: Subject<void> = new Subject();
  permissions!: any[] ;


  constructor(private http: HttpClient,public jwtHelper : JwtHelperService) { }

  public getTokenPayload(token: string) {
    return this.jwtHelper.decodeToken(token);
  }

  public setTokenPayload(token: string) {
    this.tokenPayload = this.getTokenPayload(token);
    if (this.tokenPayload) return;
    const data: any = {};
    this.tokenPayload = data;
  }

  public isAuthenticated(): boolean {
    return !this.jwtHelper.isTokenExpired(this.token);
  }

  public saveToken(token: string) {
    sessionStorage.setItem('token', token);
  }

  public getToken() {
    return sessionStorage.getItem('token');
  }

  public clearToken() {
    sessionStorage.clear();
  }


  loginUserFromServer(user:any):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/signin`,user)
 
}
      
  registerUserFromServer(user :User):Observable<User>{ 
    return this.http.post<User>(`${this.baseUrl}/register`,user);
  }
}
