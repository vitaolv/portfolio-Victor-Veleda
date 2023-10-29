import { useEffect } from "react";

const useIntersectionObserver = (
  selector,
  callback,
  options = { threshold: 0.2 }
) => {
  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    const targets = document.querySelectorAll(selector);

    targets.forEach((target) => {
      observer.observe(target);
    });

    return () => {
      targets.forEach((target) => {
        observer.unobserve(target);
      });
    };
  }, [selector, callback, options]);
};

export default useIntersectionObserver;
