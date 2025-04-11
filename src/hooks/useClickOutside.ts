import { useEffect, RefObject } from 'react';

/**
 * Custom hook to detect clicks outside of a specified element
 *
 * @param ref - Reference to the element to detect clicks outside of
 * @param callback - Function to call when a click outside is detected
 * @param enabled - Whether the hook should be active (defaults to true)
 */
const useClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T | null>,
  callback: () => void,
  enabled: boolean = true,
): void => {
  useEffect(() => {
    if (!enabled) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback, enabled]);
};

export default useClickOutside;
