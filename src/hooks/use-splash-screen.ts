import { useEffect } from 'react';

import { useScrollLock } from './use-scroll-lock';

export function useSplashScreen(option: 'hide' | 'show') {
  const { lockScroll, unlockScroll } = useScrollLock();

  useEffect(() => {
    const display = option === 'hide' ? 'none' : 'block';

    if (option === 'hide') {
      unlockScroll();
    } else {
      lockScroll();
    }

    if (typeof window !== 'undefined') {
      const loader = document.getElementById('loader');
      if (loader) loader.style.display = display;
    }
  }, [option, lockScroll, unlockScroll]);
}
