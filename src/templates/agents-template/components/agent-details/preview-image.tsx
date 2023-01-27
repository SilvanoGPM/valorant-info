import { Image } from '@chakra-ui/react';

interface PreviewImageProps {
  src: string;
  showImage: boolean;
  onLoad: () => void;
}

export function PreviewImage({ src, showImage, onLoad }: PreviewImageProps) {
  return (
    <Image
      src={src}
      maxH="400px"
      transform={`scale(${showImage ? '1' : '0'})`}
      transition="0.2s ease-in-out"
      onLoad={onLoad}
    />
  );
}
