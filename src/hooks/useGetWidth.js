import { useEffect, useState } from 'react';

export function useGetWidth() {
  const initialWidth = document.getElementById('app').offsetWidth - 30;
  const [width, setWidth] = useState(initialWidth);

  function onResize() {
    const newWidth = document.getElementById('app').offsetWidth - 30;
    setWidth(newWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', onResize);
    return () => {
      return window.removeEventListener('resize', onResize);
    };
  }, [width]);

  return width;
}
