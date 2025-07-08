import { useEffect, useRef } from 'react';

export const useScrollAnimation = (threshold = 0.1) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            // Find all children with stagger delays
            const staggerElements = entry.target.querySelectorAll('[class*="stagger-delay-"]');
            staggerElements.forEach((el, index) => {
              const delay = prefersReducedMotion ? 0 : index * 100; // Reduce delay for accessibility
              setTimeout(() => {
                el.classList.add('animate');
              }, delay);
            });
          }
        });
      },
      {
        threshold,
        rootMargin: '0px 0px -30px 0px', // Smaller margin for mobile
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