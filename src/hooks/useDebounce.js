import { useMemo, useEffect } from 'react';
import debounce from 'lodash.debounce';

function useDebounce(callback, effect, dependencies, delay) {
  const debounceEffectHandler = useMemo(
    () => debounce(callback, delay),
    [dependencies]
  );

  useEffect(() => {
    effect();
    return () => debounceEffectHandler.cancel();
  }, [dependencies]);

  return { debounceEffectHandler };
}

export default useDebounce;
