import { type MapGateway } from '$core/domain/gateways/map-gateway';

export class GetMapsUseCase {
  constructor(private mapGateway: MapGateway) {}

  async execute() {
    const maps = await this.mapGateway.getAll();

    return { maps };
  }
}
