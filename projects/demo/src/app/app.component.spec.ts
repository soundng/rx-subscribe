import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RxSubscribeModule } from '@soundng/rx-subscribe';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RxSubscribeModule],
      declarations: [AppComponent]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
