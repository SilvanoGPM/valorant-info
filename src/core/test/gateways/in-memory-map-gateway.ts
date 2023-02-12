import { Map } from '$core/domain/entities/map';
import type { MapGateway } from '$core/domain/gateways/map-gateway';

export class InMemoryMapGateway implements MapGateway {
  constructor(public maps: Map[] = []) {}

  async getAll() {
    return this.maps;
  }
}
