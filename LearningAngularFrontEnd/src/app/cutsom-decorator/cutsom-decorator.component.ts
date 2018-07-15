import { Component, OnInit } from '@angular/core';


/* 
function displ(target,name , descriptor)
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
    
    return result;
  }

   //original();



  return descriptor;


}
 */
@Component({
  selector: 'app-cutsom-decorator',
  templateUrl: './cutsom-decorator.component.html',
  styleUrls: ['./cutsom-decorator.component.css']
})
export class CutsomDecoratorComponent implements OnInit {

  constructor(){
    // calling method
 this.aSimpleMethod(5,2);

  }

  //accessing custom decorator
  //@displ
  aSimpleMethod(a,b)
  {

    //console.log("This is sample method");
    return a*b;
  }


// updateed values 



  ngOnInit() {
  }

}
