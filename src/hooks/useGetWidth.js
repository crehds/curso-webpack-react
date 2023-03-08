import {
  useCallback, useEffect, useState
} from 'react';
// import { debounce } from 'lodash';

export function useGetWidth({ id = '' }) {
  const element = document.getElementById(id);
  const initialWidth = element.offsetWidth;
  const [width, setWidth] = useState(initialWidth);
  const onResize = useCallback(() => {
    const newWidth = document.getElementById(id).offsetWidth;
    setWidth(newWidth);
  }, [id]);

  useEffect(() => {
    window.addEventListener('resize', onResize);
    return () => {
      return window.removeEventListener('resize', onResize);
    };
  }, []);

  return width;
}
