import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBorderShadow]'
})
export class BorderShadowDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onmouseover() {
    this.renderer.setStyle(this.element.nativeElement, 'box-shadow', '0px 0px 40px  9px #3f51b5')
    this.renderer.setStyle(this.element.nativeElement, 'border-color', '#3f51b5cc')

    this.renderer.setStyle(this.element.nativeElement, 'transition', '0.3s')
  }

  @HostListener('mouseleave') onmouseleave() {
    this.renderer.setStyle(this.element.nativeElement, 'box-shadow', '')
    this.renderer.setStyle(this.element.nativeElement, 'border-color', '#3f51b5')

    this.renderer.setStyle(this.element.nativeElement, 'transition', '0.5s')

  }



}
