import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { RxSubscribeService } from './rx-subscribe.service';

describe('RxSubscribeService', () => {
  let spectator: SpectatorService<RxSubscribeService>;
  const createService = createServiceFactory(RxSubscribeService);

  beforeEach(() => (spectator = createService()));

  it('should...', () => {
    expect(spectator.service).toBeTruthy();
  });
});
