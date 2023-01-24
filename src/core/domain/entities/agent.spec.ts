import { makeAgent } from '$core/test/factories/agent-factory';

describe('Agent entity', () => {
  it('should be able to create an agent', () => {
    const agent = makeAgent();

    expect(agent).toBeTruthy();
  });
});
