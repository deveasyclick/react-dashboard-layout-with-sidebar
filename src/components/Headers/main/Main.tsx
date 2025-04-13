import { memo, useCallback, useState } from 'react';
import Button from '../../Button/Button';
import AppsDropdown from './dropdowns/apps/AppsDropdown';
import NotificationsDropdown from './dropdowns/notifications/NotificationsDropdown';
import UserMenuDropdown from './dropdowns/UserMenuDropdown';
import IconWrapper from '../../IconWrapper/IconWrapper';
import IconInput from '../../Input/IconInput';
import { HeaderButtonProps, LogoProps, MainHeaderProps } from './types';

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

/**
 * Search form component for the main header
 */
const SearchForm = memo(() => (
  <form action="#" method="GET" className="hidden md:block md:pl-2">
    <label htmlFor="topbar-search" className="sr-only">
      Search
    </label>
    <IconInput
      iconName="search"
      name="search"
      placeholder="Search"
      type="text"
      id="topbar-search"
    />
  </form>
));

/**
 * Header button component with icon
 */
const HeaderButton = memo(
  ({
    ariaControls,
    ariaExpanded,
    onClick,
    children,
    className = '',
    id,
  }: HeaderButtonProps) => (
    <Button
      aria-controls={ariaControls}
      aria-expanded={ariaExpanded}
      aria-haspopup="true"
      onClick={onClick}
      className={className}
      id={id}>
      {children}
    </Button>
  ),
);

/**
 * Main header component for the application
 */
const MainHeader = ({
  logoSrc,
  logoAlt,
  logoText,
  userPhotoSrc = 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png',
  userPhotoAlt = 'user photo',
  userName = 'Michael Gough',
  userEmail = 'michael@example.com',
}: MainHeaderProps = {}) => {
  // State for tracking which dropdown is open
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Close dropdown when clicking outside
  const closeDropdown = useCallback(() => {
    setActiveDropdown(null);
  }, []);

  // Toggle dropdown - close if already open, open and close others if closed
  const toggleDropdown = useCallback((dropdownId: string) => {
    setActiveDropdown((prevDropdown) =>
      prevDropdown === dropdownId ? null : dropdownId,
    );
  }, []);

  // Memoized handlers for each dropdown
  const handleToggleApps = useCallback(
    () => toggleDropdown('apps'),
    [toggleDropdown],
  );

  const handleToggleNotifications = useCallback(
    () => toggleDropdown('notifications'),
    [toggleDropdown],
  );

  const handleToggleUserMenu = useCallback(
    () => toggleDropdown('userMenu'),
    [toggleDropdown],
  );

  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-2.5 dark:bg-gray-800 dark:border-gray-700 fixed left-0 right-0 top-0 z-50">
      <div className="flex flex-wrap justify-between items-center">
        <section className="flex justify-start items-center">
          <HeaderButton ariaControls="sidebar">
            <IconWrapper name="menu" />
            <IconWrapper name="cancel" aria-hidden="true" className="hidden" />
            <span className="sr-only">Toggle sidebar</span>
          </HeaderButton>
          <Logo imageSrc={logoSrc} imageAlt={logoAlt} text={logoText} />
          <SearchForm />
        </section>
        <section className="flex items-center lg:order-2">
          <HeaderButton ariaControls="mobile-search" className="md:hidden">
            <span className="sr-only">Toggle search</span>
            <IconWrapper name="search" aria-hidden="true" />
          </HeaderButton>

          <HeaderButton
            ariaControls="notification-dropdown"
            ariaExpanded={activeDropdown === 'notifications'}
            onClick={handleToggleNotifications}>
            <span className="sr-only">View notifications</span>
            <IconWrapper name="bell" />
          </HeaderButton>
          <NotificationsDropdown
            isOpen={activeDropdown === 'notifications'}
            onClose={closeDropdown}
          />

          <HeaderButton
            ariaControls="apps-dropdown"
            ariaExpanded={activeDropdown === 'apps'}
            onClick={handleToggleApps}>
            <span className="sr-only">View Apps</span>
            <IconWrapper name="apps" />
          </HeaderButton>
          <AppsDropdown
            isOpen={activeDropdown === 'apps'}
            onClose={closeDropdown}
          />

          <HeaderButton
            ariaControls="user-menu-dropdown"
            ariaExpanded={activeDropdown === 'userMenu'}
            onClick={handleToggleUserMenu}
            id="user-menu-button">
            <span className="sr-only">Open user menu</span>
            <img
              className="w-8 h-8 rounded-full"
              src={userPhotoSrc}
              alt={userPhotoAlt}
            />
          </HeaderButton>
          <UserMenuDropdown
            isOpen={activeDropdown === 'userMenu'}
            onClose={closeDropdown}
            userName={userName}
            userEmail={userEmail}
          />
        </section>
      </div>
    </nav>
  );
};

export default MainHeader;
