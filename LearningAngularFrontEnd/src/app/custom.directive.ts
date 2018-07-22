import { Directive } from '@angular/core';
import {ElementRef } from '@angular/core'

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

 // elment= ElementRef;

  constructor(private el : ElementRef) {
    el.nativeElement.style.color='red';
   // this.elment=el
   }
}
