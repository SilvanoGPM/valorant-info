import { makeWeapon } from '$core/test/factories/weapon-factory';

describe('Weapon entity', () => {
  it('should be able to create a weapon', () => {
    const weapon = makeWeapon();

    expect(weapon).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        name: expect.any(String),
        images: expect.any(Object),
        skins: expect.any(Array),
        shop: expect.any(Object),
        stats: expect.any(Object),
      }),
    );
  });
});
