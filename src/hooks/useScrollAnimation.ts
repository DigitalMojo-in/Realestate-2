import { useEffect, useRef } from 'react';

export const useScrollAnimation = (threshold = 0.1) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            // Find all children with stagger delays
            const staggerElements = entry.target.querySelectorAll('[class*="stagger-delay-"]');
            staggerElements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate');
              }, index * 100);
            });
          }
        });
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const element = elementRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold]);

  return elementRef;
};