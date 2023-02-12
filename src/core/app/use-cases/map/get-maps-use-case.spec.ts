import { Map } from '$core/domain/entities/map';
import { makeMap } from '$core/test/factories/map-factory';
import { InMemoryMapGateway } from '$core/test/gateways/in-memory-map-gateway';

import { GetMapsUseCase } from './get-maps-use-case';

describe('Get maps use case', () => {
  it('should be able to get all maps', async () => {
    const mapGateway = new InMemoryMapGateway([makeMap()]);

    const getMaps = new GetMapsUseCase(mapGateway);

    const { maps } = await getMaps.execute();

    expect(maps).toHaveLength(1);
    expect(maps[0]).toBeInstanceOf(Map);
  });
});
