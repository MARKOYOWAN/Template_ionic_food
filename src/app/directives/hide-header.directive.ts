import { AfterViewInit, Directive, Input, Renderer2 } from '@angular/core';
import { DomController } from '@ionic/angular';

@Directive({
  selector: '[appHideHeader]'
})
export class HideHeaderDirective implements AfterViewInit {
  @Input('appHideHeader') header: any;

  constructor(
    private renderer: Renderer2,
    private domCtrl: DomController
  ) { }
  ngAfterViewInit(): void { 
  }

}
