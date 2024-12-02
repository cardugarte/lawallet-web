import Image from 'next/image';

export default function Component({ currentColor = 'currentColor' }) {
  return (
    <Image
      src={'https://github.com/cardugarte/lightning-domain-main/blob/main/src/assets/images/logo-large.png?raw=true'}
      alt={'xplorers.ar logo'}
      width={500}
      height={500}
    />
  );
}
