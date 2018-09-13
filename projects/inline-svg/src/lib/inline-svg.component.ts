import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, Renderer2 } from '@angular/core';
import { InlineSvgService } from './inline-svg.service';

@Component({
  selector: 'ngx-inline-svg',
  template: ``
})
export class InlineSvgComponent implements OnChanges {

  @Input()
  src: string;

  @Output()
  onSvgInserted: EventEmitter<any> = new EventEmitter();

  constructor(
      private svgService: InlineSvgService,
      private el: ElementRef,
      private renderer: Renderer2
  ) { }

  ngOnChanges() {
      this.initSource();
  }

  initSource() {

      this.svgService.getSvg(this.src).subscribe((svgContent) => {

          if (this.el.nativeElement.querySelector('.svg-wrapper')) {
              this.renderer.removeChild(this.el.nativeElement, this.el.nativeElement.querySelector('.svg-wrapper'));
          }

          if (svgContent) {
              const wrapper = this.renderer.createElement('div');
              this.renderer.addClass(wrapper, 'svg-wrapper');
              wrapper.innerHTML = svgContent;

              this.renderer.appendChild(this.el.nativeElement, wrapper);
              this.onSvgInserted.emit();
          }

      });
  }

}
