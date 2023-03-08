import {
  useCallback, useEffect, useState
} from 'react';
import useDebounce from './useDebounce';

export function useGetWidth({ id = '' }) {
  const element = document.getElementById(id);
  const initialWidth = element.offsetWidth;
  const [width, setWidth] = useState(initialWidth);
  const onResize = useCallback(() => {
    const newWidth = document.getElementById(id).offsetWidth;
    setWidth(newWidth);
  }, [id]);

  const handleWidth = () => {
    const app = document.querySelector('.portfolio');
    app.style.minWidth = `${width}px`;
  }

  const { debounceEffectHandler } = useDebounce(onResize, handleWidth, width, 750);

  useEffect(() => {
    window.addEventListener('resize', debounceEffectHandler);
    return () => {
      return window.removeEventListener('resize', debounceEffectHandler);
    };
  }, []);
}
