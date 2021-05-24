import { Directive, ElementRef, Host, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  

  constructor(private elem:ElementRef) { }
  @HostListener("mouseover") onmouseover(){
    this.textHighlight("darkgray");
  }

  @HostListener("mouseout") onmouseout(){
    this.textHighlight("");
  }


      private textHighlight(action:string){
        this.elem.nativeElement.style.backgroundColor =action; //elementRef grant us direct access to the host DOM element through its nativeElement prperty
  
      }


}
