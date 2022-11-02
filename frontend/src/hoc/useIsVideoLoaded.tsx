import { useEffect, useState } from "react";
import { useIsElementInViewportHook } from "./useIsElementInViewportHook";

export const useIsVideoLoaded = (lazy: boolean) => {
  const { videoRef, isVisible } = useIsElementInViewportHook({
    rootMargin: "0px 0px 500px 0px",
  });

  const [isLoaded, setIsLoaded] = useState(!lazy);

  useEffect(() => {
    if (isLoaded || !isVisible) {
      return;
    }

    setIsLoaded(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  return { videoRef, isLoaded };
};
