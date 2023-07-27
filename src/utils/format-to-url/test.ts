import { formatToURL } from '.';

describe('formatToURL util', () => {
  it('should transform to lower case and remove all slashes', () => {
    const value = formatToURL('KAY/O');

    expect(value).toEqual('kayo');
  });
});
