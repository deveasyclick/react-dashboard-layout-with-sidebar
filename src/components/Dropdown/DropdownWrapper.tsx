import React from 'react';

type DropdownWrapperProps = {
  isOpen: boolean;
  id: string;
  children: React.ReactNode;
  className?: string;
  position?: 'right' | 'left' | 'center';
};

const DropdownWrapper: React.FC<DropdownWrapperProps> = ({
  isOpen,
  id,
  children,
  className = '',
  position = 'right',
}) => {
  if (!isOpen) return null;

  const positionClasses = {
    right: 'right-0',
    left: 'left-0',
    center: 'left-1/2 transform -translate-x-1/2',
  };

  return (
    <div
      className={`overflow-hidden z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 shadow-lg dark:divide-gray-600 dark:bg-gray-700 rounded-xl absolute top-[35px] ${positionClasses[position]} ${className}`}
      id={id}>
      {children}
    </div>
  );
};

export default DropdownWrapper;
