import { Text, TextProps } from '@chakra-ui/react';

export function HighlightText({ children, ...props }: TextProps) {
  return (
    <Text as="span" color="brand.500" {...props}>
      {children}
    </Text>
  );
}
