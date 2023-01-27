import { makeAgent } from '$core/test/factories/agent-factory';

describe('Agent entity', () => {
  it('should be able to create an agent', () => {
    const agent = makeAgent();

    expect(agent).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        name: expect.any(String),
        description: expect.any(String),
        images: expect.any(Object),
        role: expect.any(Object),
        abilities: expect.any(Array),
      }),
    );
  });
});
