import { DependencyList, useCallback, useEffect } from "react";

export default function useDebouncedEffect(
  effect: () => void,
  deps: DependencyList,
  awaitTime: number,
): void {
  const callback = useCallback(effect, deps);

  useEffect(() => {
    const handler = setTimeout(callback, awaitTime);
    return () => clearTimeout(handler);
  }, [callback, awaitTime]);
}
