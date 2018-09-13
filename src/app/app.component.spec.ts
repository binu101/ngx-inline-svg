import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { InlineSvgModule } from '../../projects/inline-svg/src/lib/inline-svg.module';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [InlineSvgModule],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
