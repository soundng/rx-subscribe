import { Component, ChangeDetectionStrategy } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

const createSource = () => interval(1000).pipe(map(i => ({ count: i })));

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  source$ = createSource();

  resetSource() {
    this.source$ = createSource();
  }
}
