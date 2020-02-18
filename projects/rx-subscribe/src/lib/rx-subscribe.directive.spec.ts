import { createDirectiveFactory, SpectatorDirective } from '@ngneat/spectator';
import { Observable, Subject } from 'rxjs';
import { RxSubscribeDirective } from './rx-subscribe.directive';

describe('RxSubscribeDirective', () => {
  interface State {
    count: number;
  }

  interface HostComponent {
    source$: Observable<State> | null;
  }

  let spectator: SpectatorDirective<RxSubscribeDirective<State>, HostComponent>;
  let source$: Subject<State>;
  const createDirective = createDirectiveFactory<RxSubscribeDirective<State>, HostComponent>(RxSubscribeDirective);

  beforeEach(() => {
    source$ = new Subject<State>();
    spectator = createDirective(`<div *rxSubscribe="source$; let state">{{state.count}}</div>`, {
      hostProps: { source$ }
    });
  });

  it('should create', () => {
    expect(spectator.directive).toBeTruthy();
  });

  it('should ignore null input', () => {
    spectator.hostComponent.source$ = null;
    spectator.fixture.detectChanges();
    expect(spectator.element.textContent).toBe('');
  });

  it('should not display nothing before the first value', () => {
    expect(spectator.element.textContent).toBe('');
  });

  it('should display count after dispatching', () => {
    source$.next({ count: 0 });
    spectator.fixture.detectChanges();
    expect(spectator.element.textContent).toBe('0');
    source$.next({ count: 1 });
    spectator.fixture.detectChanges();
    expect(spectator.element.textContent).toBe('1');
  });

  it('should clear view when the source has been changed to another source', () => {
    source$.next({ count: 1 });
    spectator.fixture.detectChanges();
    expect(spectator.element.textContent).toBe('1');
    const newSource$ = new Subject<State>();
    spectator.hostComponent.source$ = newSource$;
    spectator.fixture.detectChanges();
    expect(spectator.element.textContent).toBe('');
    newSource$.next({ count: 50 });
    spectator.fixture.detectChanges();
    expect(spectator.element.textContent).toBe('50');
  });

  it('should clear view when the source has been changed to null', () => {
    source$.next({ count: 1 });
    spectator.fixture.detectChanges();
    expect(spectator.element.textContent).toBe('1');
    spectator.hostComponent.source$ = null;
    spectator.fixture.detectChanges();
    expect(spectator.element.textContent).toBe('');
  });
});
