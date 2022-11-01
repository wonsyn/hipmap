import { useEffect, useRef, useState } from "react";

export function useIsElementInViewportHook(options?: IntersectionObserverInit) {
  const videoRef = useRef<any>();
  const [isVisible, setIsVisible] = useState(false);

  const callback = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    videoRef.current && observer.observe(videoRef.current);

    return () => {
      observer.disconnect();
    };
  }, [videoRef, options]);
  return { videoRef, isVisible };
}
