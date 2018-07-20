import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import {  RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { TestApiComponent } from './test-api/test-api.component';
import { ExampleNgForComponent } from './example-ng-for/example-ng-for.component';
import { ExampleServiceComponent } from './example-service/example-service.component';
import { CutsomDecoratorComponent } from './cutsom-decorator/cutsom-decorator.component';


import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    TestApiComponent,
    ExampleNgForComponent,
    ExampleServiceComponent,
    CutsomDecoratorComponent,
    HomeComponent,
    UsersComponent,
    LoginComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
      path: 'home',
      component : HomeComponent
    },
    {
      path : 'users',
      component : UsersComponent
    },
    {
      path : 'login',
      component : LoginComponent
    },
    {
      path : 'admin',
      component : AdminComponent
    }
  ])
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
