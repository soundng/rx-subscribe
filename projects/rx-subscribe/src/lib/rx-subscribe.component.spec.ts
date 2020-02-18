import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { RxSubscribeComponent } from './rx-subscribe.component';

describe('RxSubscribeComponent', () => {
  let spectator: Spectator<RxSubscribeComponent>;
  const createComponent = createComponentFactory(RxSubscribeComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
