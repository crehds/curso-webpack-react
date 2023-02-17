import { useEffect, useState } from 'react';

export function useGetWidth() {
  const initialWidth = document.getElementById('app').offsetWidth;
  const [width, setWidth] = useState(initialWidth);

  function onResize() {
    const newWidth = document.getElementById('app').offsetWidth;
    setWidth(newWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', onResize);
    return () => {
      return window.removeEventListener('resize', onResize);
    };
  }, []);

  return width;
}
