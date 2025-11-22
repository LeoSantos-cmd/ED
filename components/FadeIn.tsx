import React, { useRef, useEffect, useState } from 'react';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
  fullWidth?: boolean;
}

export const FadeIn: React.FC<FadeInProps> = ({ 
  children, 
  delay = 0, 
  direction = 'up', 
  className = '',
  fullWidth = false
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  const getDirectionClasses = () => {
    switch (direction) {
      case 'up': return 'translate-y-8';
      case 'down': return '-translate-y-8';
      case 'left': return 'translate-x-8';
      case 'right': return '-translate-x-8';
      case 'none': return '';
      default: return 'translate-y-8';
    }
  };

  return (
    <div
      ref={domRef}
      className={`transition-all duration-500 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0 translate-x-0' : `opacity-0 ${getDirectionClasses()}`
      } ${className} ${fullWidth ? 'w-full' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};