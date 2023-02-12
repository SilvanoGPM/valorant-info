import { Map } from '$core/domain/entities/map';
import type { RecursivePartial } from '$utils/recursive-partial';

export function makeMap(map: RecursivePartial<Map> = {}) {
  return new Map({
    id: map.id ?? 'test-id',
    name: map.name ?? 'test-name',
    coordinates: map.coordinates ?? 'test-coordinates',
    images: {
      inGame: map.images?.inGame ?? 'test-in-game-image',
      inList: map.images?.inList ?? 'test-in-list-image',
      splash: map.images?.splash ?? 'test-splash-image',
    },
  });
}
