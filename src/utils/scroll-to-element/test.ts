import { scrollToElement } from '.';

describe('scroll-to-element util', () => {
  function mockQuerySelector(shouldFind: boolean) {
    const querySelectorMock = jest.fn();
    const scrollIntoViewMock = jest.fn();

    querySelectorMock.mockReturnValue(
      shouldFind
        ? {
            scrollIntoView: scrollIntoViewMock,
          }
        : undefined,
    );

    // Mocking querySelector
    Object.defineProperty(global.document, 'querySelector', {
      value: querySelectorMock,
      configurable: true,
    });

    return { querySelectorMock, scrollIntoViewMock };
  }

  it('should call scrollIntoView of element', () => {
    const { querySelectorMock, scrollIntoViewMock } = mockQuerySelector(true);

    scrollToElement('test');

    expect(querySelectorMock).toHaveBeenCalledWith('[data-scroll="test"]');

    expect(scrollIntoViewMock).toHaveBeenCalledWith({
      behavior: 'smooth',
      block: 'start',
    });
  });

  it('should not call scrollIntoView of element when querySelector not found anything', () => {
    const { querySelectorMock, scrollIntoViewMock } = mockQuerySelector(false);

    scrollToElement('test');

    expect(querySelectorMock).toHaveBeenCalledWith('[data-scroll="test"]');

    expect(scrollIntoViewMock).not.toHaveBeenCalled();
  });
});
