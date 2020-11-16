import { useEffect, useRef } from 'react';

const useDidUpdateEffect = (effect, deps) => {
  const isFirstRun = useRef(true);

  useEffect(() => {
    isFirstRun.current ? (isFirstRun.current = false) : effect();
    // eslint-disable-next-line
  }, deps);
};

export default useDidUpdateEffect;
