import { memo } from 'react';
import { LogoProps } from './types';
import Image from '../../Image';
import { EXTERNAL_IMAGES } from '../../../constants/images';

/**
 * Logo component for the main header
 */
const Logo = memo(
  ({
    imageSrc = EXTERNAL_IMAGES.DEFAULT_LOGO,
    imageAlt = 'Alyusroh Logo',
    text = 'Alyusroh',
  }: LogoProps) => (
    <a href="#" className="flex items-center justify-between mr-4">
      <Image
        src={imageSrc}
        className="mr-3 h-8"
        alt={imageAlt}
        fallbackSrc="/placeholder.svg"
        objectFit="contain"
      />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
        {text}
      </span>
    </a>
  ),
);

export default Logo;
