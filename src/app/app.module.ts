import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormlyModule } from '@ngx-formly/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './auth/register/register.component';
import { PageNotFoundComponent } from './auth/page-not-found/page-not-found.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { SharedModule } from './shared/shared.module';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormlyNgZorroAntdModule } from '@ngx-formly/ng-zorro-antd';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { NzMessageService } from 'ng-zorro-antd/message';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormlyModule,
    FormlyNgZorroAntdModule,
    NgxIntlTelInputModule
   


    

  ],
  providers: [NzNotificationService,NzMessageService,JwtHelperService,
    { provide:  JWT_OPTIONS, useValue: JWT_OPTIONS},
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
