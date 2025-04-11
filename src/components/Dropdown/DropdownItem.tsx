import { memo, ReactNode } from 'react';

/**
 * Props for dropdown item component
 */
type DropdownItemProps = {
  children: ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
};

/**
 * Reusable dropdown item component
 * 
 * Used as a standardized item for dropdown menus throughout the application
 */
const DropdownItem = memo(({ 
  children, 
  href = '#',
  className = '',
  onClick
}: DropdownItemProps) => (
  <a
    href={href}
    onClick={onClick}
    className={`block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white ${className}`}>
    {children}
  </a>
));

export default DropdownItem;
