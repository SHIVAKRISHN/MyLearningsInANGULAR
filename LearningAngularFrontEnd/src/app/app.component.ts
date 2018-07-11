import { Component } from '@angular/core';


//custme decorator
function log(target,name , descriptor)
{
  console.log("the custorm decorator is");
  console.log(target,name,descriptor);

  // store the original function in a variable
  const original = descriptor.value;

  //modify the original function
  descriptor.value= function(...args)
  {
    console.log("this is modified function");

    console.log("the arguments are ", args ,"  ....");

    const result = original.apply(this,args); 
    
    console.log("the result of the function is ", result)
    
  }

   //original();



  return descriptor;


}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(){
    // calling method
 this.aSimpleMethod(5,2);

  }

  //accessing custom decorator
  @log
  aSimpleMethod(a,b)
  {

    //console.log("This is sample method");
    return a*b;
  }

}
