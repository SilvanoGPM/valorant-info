import { makeMap } from '$core/test/factories/map-factory';

describe('Map entity', () => {
  it('should be able to create a map', () => {
    const map = makeMap();

    expect(map).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        name: expect.any(String),
        coordinates: expect.any(String),
        images: expect.any(Object),
      }),
    );
  });
});
