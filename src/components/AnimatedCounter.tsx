import { useEffect, useState } from 'react';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}

export const AnimatedCounter = ({ 
  end, 
  duration = 2000, 
  prefix = '', 
  suffix = '', 
  decimals = 0,
  className = '' 
}: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (hasAnimated) return;
    
    // Add intersection observer for scroll-triggered animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            startAnimation();
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector(`[data-counter="${end}"]`);
    if (element) {
      observer.observe(element);
    }

    const startAnimation = () => {
      const startTime = Date.now();
      const endTime = startTime + duration;
      
      const updateCount = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);
        
        // Enhanced easing function for more dynamic animation
        const easeOutCubic = 1 - Math.pow(1 - progress, 3);
        const currentCount = end * easeOutCubic;
        
        setCount(currentCount);
        
        if (now < endTime) {
          requestAnimationFrame(updateCount);
        } else {
          setCount(end);
          setHasAnimated(true);
        }
      };
      
      requestAnimationFrame(updateCount);
    };
    
    return () => {
      observer.disconnect();
    };
  }, [end, duration, hasAnimated]);

  const formatNumber = (num: number) => {
    if (decimals > 0) {
      return num.toFixed(decimals);
    }
    return Math.floor(num).toLocaleString();
  };

  return (
    <span 
      className={`${className} animate-count-up`}
      data-counter={end}
    >
      {prefix}{formatNumber(count)}{suffix}
    </span>
  );
};