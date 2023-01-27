import { Titillium_Web } from '@next/font/google';

const tintilliumWeb = Titillium_Web({
  weight: ['400', '600', '700', '900'],
  subsets: ['latin'],
});

export function Fonts() {
  return (
    <style jsx global>{`
      html {
        font-family: ${tintilliumWeb.style.fontFamily};
      }
    `}</style>
  );
}
