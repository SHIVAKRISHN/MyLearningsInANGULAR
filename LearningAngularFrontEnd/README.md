# LearningAngularFrontEnd

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).




//___________________Techinical Topics_______________________//
<pre>

Decorators
   In angular we have two types of decorators 
      1) Class Decorators : Decorator which is applied on Class is the Class Decorator
      2) Member Decorators : which is applied on function 
      //reference code at app.component.ts


__________________________________________________________

LifeChycleHooks

  Some of the lifechylce hook methods in angular are
      OnChanges
      OnInit
      DoCheck
      AfterContentInit
      AfterContentChecked
      AfterViewInit
      AfterViewChecked
      OnDestory


Suscribe
      Suscribe is the Rxjs component to handle the asyncronicus data as pipe,i.e  the end points can emit the some events so we need to sucribe that event.
    

Deploying the app in tomcat server

      1) ng build --prod --base-href=/appName/
      2) create Directory with thenname <b>appName</b> in webapps directory
      3) Copy all files in dist direcory and paste in appName folder in webapps
      4) Then access the application using localhost:8080/appName

Implementing routing

      1) import {  RouterModule } from '@angular/router'
      2) In imports array add 
      <pre> RouterModule.forRoot([
      {
      path: 'home',
      component : HomeComponent
    },
    {
      path : 'users',
      component : UsersComponent
    }
  ])
  </pre>

      iii) and keep routeroutlet to where our routes need to be render
            <router-outlet></router-outlet>
      iV) in your html add navingaiong to the these links like
         <a routerLink='/home'>Go to home page</a>
         
 HashloacationStargey 

      i) import { LocationStrategy, HashLocationStrategy } from '@angular/common'; in app.module.ts
      ii)  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy}], in app.module.ts




</pre>


