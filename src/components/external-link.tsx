import { Link, LinkProps } from '@chakra-ui/react';

export function ExternalLink({ children, ...props }: LinkProps) {
  return (
    <Link
      _hover={{ color: 'brand.500' }}
      transition="0.2s ease-in-out"
      target="_blank"
      {...props}
    >
      {children}
    </Link>
  );
}
