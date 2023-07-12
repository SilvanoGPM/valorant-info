import { useRouter } from 'next/router';

import { Link, LinkProps } from '$components/link';

interface NavLinkProps extends LinkProps {
  shouldMatchExactHref?: boolean;
  isMobile?: boolean;
}

export function NavLink({
  href,
  shouldMatchExactHref = false,
  shouldShowUnderline = true,
  isMobile,
  ...props
}: NavLinkProps) {
  const { asPath } = useRouter();

  let isActive = false;

  if (shouldMatchExactHref && (asPath === href || asPath === props.as)) {
    isActive = true;
  }

  if (
    !shouldMatchExactHref &&
    (asPath.startsWith(String(href)) || asPath.startsWith(String(props.as)))
  ) {
    isActive = true;
  }

  const color = isActive && isMobile ? 'brand.500' : 'inherit';

  return (
    <Link
      shouldShowUnderline={shouldShowUnderline}
      href={href}
      color={color}
      {...props}
    />
  );
}
