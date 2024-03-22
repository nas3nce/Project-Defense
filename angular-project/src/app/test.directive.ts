import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTest]'
})
export class TestDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onmouseover() {
    this.renderer.setStyle(this.element.nativeElement, 'background-color', "red")
    this.renderer.setStyle(this.element.nativeElement, 'transition', '0.3s')
  }

  @HostListener('mouseleave') onmouseleave() {
    this.renderer.removeStyle(this.element.nativeElement, 'background-color')
    this.renderer.removeStyle(this.element.nativeElement, 'margin')
    this.renderer.removeStyle(this.element.nativeElement, 'padding')
    this.renderer.setStyle(this.element.nativeElement, 'transition', '0.5s')

  }



}
