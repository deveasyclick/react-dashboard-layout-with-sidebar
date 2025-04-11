import { IconProps } from '../../../types';

// Icon should not be used directly
const SearchIcon: React.FC<IconProps> = ({ width, height, ...rest }) => {
  return (
    <svg
      fill="currentColor"
      width={width}
      height={height}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"></path>
    </svg>
  );
};

export default SearchIcon;
