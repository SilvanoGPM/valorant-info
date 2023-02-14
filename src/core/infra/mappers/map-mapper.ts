import { Map } from '$core/domain/entities/map';
import { RawMap } from '../gateways/http-map-gateway';

export class MapMapper {
  static toMap(rawMap: RawMap) {
    return new Map({
      id: rawMap.uuid,
      name: rawMap.displayName,
      coordinates: rawMap.coordinates,

      images: {
        inGame: rawMap.displayIcon,
        inList: rawMap.listViewIcon,
        splash: rawMap.splash,
      },
    });
  }
}
