import { IconProps } from '../../../types';

/**
 * Chat bubble notification icon
 */
const ChatBubbleIcon: React.FC<IconProps> = (props) => (
  <svg
    aria-hidden="true"
    className="w-3 h-3 text-white"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      fillRule="evenodd"
      d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
      clipRule="evenodd"></path>
  </svg>
);

export default ChatBubbleIcon;
