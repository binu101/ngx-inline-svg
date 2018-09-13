import { ModuleWithProviders, NgModule } from '@angular/core';
import { InlineSvgComponent } from './inline-svg.component';
import { InlineSvgService } from './inline-svg.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
      CommonModule,
      HttpClientModule
  ],
  declarations: [InlineSvgComponent],
  exports: [InlineSvgComponent]
})
export class InlineSvgModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: InlineSvgModule,
            providers: [
                InlineSvgService
            ]
        };
    }
}
