import { SystemStyleObject } from '@chakra-ui/react';

export interface MountSxParams {
  pagination?: SystemStyleObject;
  paginationBullet?: SystemStyleObject;
  paginationBulletActive?: SystemStyleObject;
  button?: SystemStyleObject;
  buttonContent?: SystemStyleObject;
}

export function mountSx({
  pagination,
  paginationBullet,
  paginationBulletActive,
  button,
  buttonContent,
}: MountSxParams = {}) {
  const swiperPagination = pagination ?? { padding: '0 12px' };

  const swiperPaginationBullet = paginationBullet ?? {
    background: 'white',
    width: '1rem',
    height: '1rem',
    borderRadius: '0.5rem',
    opacity: '0.3',
  };

  const swiperPaginationBulletActive = paginationBulletActive ?? {
    background: 'brand.500',
    opacity: '0.5',
  };

  const swiperButton = button ?? {
    color: 'brand.500',
    borderColor: 'brand.500',
    borderWidth: '1px',
    borderRadius: '50%',
    height: '50px',
    position: 'absolute',
    top: '30px',
    width: '50px',

    '&::after': buttonContent ?? {
      fontSize: 'md',
    },
  };

  return {
    '.swiper-pagination': {
      ...swiperPagination,

      '&-bullet': {
        ...swiperPaginationBullet,

        '&-active': swiperPaginationBulletActive,
      },
    },
    '.swiper-button': {
      '&-next': swiperButton,
      '&-prev': swiperButton,
    },
  };
}
