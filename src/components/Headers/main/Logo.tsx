import { memo } from 'react';
import { LogoProps } from './types';

/**
 * Logo component for the main header
 */
const Logo = memo(
  ({
    imageSrc = 'https://flowbite.s3.amazonaws.com/logo.svg',
    imageAlt = 'Flowbite Logo',
    text = 'Flowbite',
  }: LogoProps) => (
    <a href="#" className="flex items-center justify-between mr-4">
      <img src={imageSrc} className="mr-3 h-8" alt={imageAlt} />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
        {text}
      </span>
    </a>
  ),
);

export default Logo;
