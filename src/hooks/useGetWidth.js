import {
  useCallback, useEffect, useState
} from 'react';

export function useGetWidth({ id = '' }) {
  const initialWidth = document.getElementById(id).offsetWidth;
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
