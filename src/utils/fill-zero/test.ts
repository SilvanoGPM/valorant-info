import { fillZero } from '.';

describe('fillZero util', () => {
  it('should put zero on start when value is less than ten', () => {
    const value = fillZero(5);

    expect(value).toEqual('05');
  });

  it('should not put zero on start when value is greathen than or equal ten', () => {
    const value = fillZero(15);

    expect(value).toEqual('15');
  });
});
