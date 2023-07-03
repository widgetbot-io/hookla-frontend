import { useEffect, useRef } from 'react';

export function useInterval(callback: () => any, delay: number) {
  const intervalRef = useRef<NodeJS.Timer>();
  const callbackRef = useRef<() => any>(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    intervalRef.current = setInterval(
      () => callbackRef.current(),
      delay
    );

    return () => clearInterval(intervalRef.current as number);
  });

  return intervalRef;
}
