import { IconProps } from '../../../types';

/**
 * Video notification icon
 */
const VideoIcon: React.FC<IconProps> = (props) => (
  <svg
    aria-hidden="true"
    className="w-3 h-3 text-white"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
  </svg>
);

export default VideoIcon;
