import type { MapGateway } from '$core/domain/gateways/map-gateway';

import { MapMapper } from '../mappers/map-mapper';
import { http } from '../services/http';

export interface RawMap {
  uuid: string;
  displayName: string;
  coordinates: string;
  displayIcon: string;
  listViewIcon: string;
  splash: string;
}

interface GetAllResponse {
  status: number;
  data: RawMap[];
}

const url = String(process.env.MAPS_URL);

export class HttpMapGateway implements MapGateway {
  async getAll() {
    const response = await http<GetAllResponse>({ url });

    const maps = response.data.data;

    return maps.map(MapMapper.toMap);
  }
}
