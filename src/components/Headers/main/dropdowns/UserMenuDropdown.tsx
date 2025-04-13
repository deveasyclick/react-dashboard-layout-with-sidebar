import { memo } from 'react';
import { DropdownHeader, DropdownItem } from '../../../../components/Dropdown';
import HeaderDropdown from '../HeaderDropdown';
import { DropdownProps } from '../types';
import IconWrapper from '../../../../components/IconWrapper/IconWrapper';

/**
 * Props for user menu dropdown component
 */
type UserMenuDropdownProps = DropdownProps & {
  userName?: string;
  userEmail?: string;
};

/**
 * User menu dropdown component
 *
 * Displays user information and menu options for account management
 */
const UserMenuDropdown = memo(
  ({
    isOpen,
    onClose,
    userName = 'Neil Sims',
    userEmail = 'name@flowbite.com',
  }: UserMenuDropdownProps) => (
    <HeaderDropdown
      isOpen={isOpen}
      onClose={onClose}
      id="user-menu-dropdown"
      className="w-56"
      position="right">
      <DropdownHeader title="User Menu" />
      <div className="py-3 px-4">
        <span className="block text-sm font-semibold text-gray-900 dark:text-white">
          {userName}
        </span>
        <span className="block text-sm text-gray-900 truncate dark:text-white">
          {userEmail}
        </span>
      </div>

      {/* Account management section */}
      <ul
        className="py-1 text-gray-700 dark:text-gray-300"
        aria-labelledby="dropdown">
        <li>
          <DropdownItem
            icon={
              <IconWrapper name="profile" className="w-5 h-5 text-gray-400" />
            }>
            My profile
          </DropdownItem>
        </li>
        <li>
          <DropdownItem
            icon={
              <IconWrapper name="settings" className="w-5 h-5 text-gray-400" />
            }>
            Account settings
          </DropdownItem>
        </li>
      </ul>

      {/* Features section */}
      <ul
        className="py-1 text-gray-700 dark:text-gray-300"
        aria-labelledby="dropdown">
        <li>
          <DropdownItem
            icon={
              <IconWrapper name="heart" className="w-5 h-5 text-gray-400" />
            }>
            My likes
          </DropdownItem>
        </li>
        <li>
          <DropdownItem
            icon={
              <IconWrapper
                name="collection"
                className="w-5 h-5 text-gray-400"
              />
            }>
            Collections
          </DropdownItem>
        </li>
        <li>
          <DropdownItem
            icon={
              <IconWrapper
                name="fire"
                className="w-5 h-5 text-primary-600 dark:text-primary-500"
              />
            }
            rightContent={
              <IconWrapper
                name="chevronRight"
                className="w-5 h-5 text-gray-400"
              />
            }
            justifyBetween>
            Pro version
          </DropdownItem>
        </li>
      </ul>

      {/* Sign out section */}
      <ul
        className="py-1 text-gray-700 dark:text-gray-300"
        aria-labelledby="dropdown">
        <li>
          <DropdownItem
            icon={
              <IconWrapper name="logout" className="w-5 h-5 text-gray-400" />
            }>
            Sign out
          </DropdownItem>
        </li>
      </ul>
    </HeaderDropdown>
  ),
);

export default UserMenuDropdown;
