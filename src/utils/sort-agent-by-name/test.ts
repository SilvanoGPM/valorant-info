import { makeAgent } from '$core/test/factories/agent-factory';
import { agentByName } from '.';

describe('agentByName util', () => {
  it('should return -1 when first agent name is less than second agent name', () => {
    const astra = makeAgent({
      name: 'Astra',
    });

    const breach = makeAgent({
      name: 'Breach',
    });

    const value = agentByName(astra, breach);

    expect(value).toEqual(-1);
  });

  it('should return 1 when first agent name is greater than second agent name', () => {
    const astra = makeAgent({
      name: 'Chamber',
    });

    const breach = makeAgent({
      name: 'Breach',
    });

    const value = agentByName(astra, breach);

    expect(value).toEqual(1);
  });

  it('should return 0 when first agent name is equal to second agent name', () => {
    const astra = makeAgent({
      name: 'Chamber',
    });

    const value = agentByName(astra, astra);

    expect(value).toEqual(0);
  });
});
