"use client";

import { useEffect, useRef, ReactNode, useState } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "fade";
  delay?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [delay, isVisible]);

  const getTransformClass = () => {
    if (isVisible) return "translate-x-0 translate-y-0";
    
    switch (direction) {
      case "up":
        return "translate-y-20";
      case "down":
        return "-translate-y-20";
      case "left":
        return "translate-x-20";
      case "right":
        return "-translate-x-20";
      default:
        return "";
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-[800ms] ease-out ${
        isVisible ? "opacity-100" : "opacity-0"
      } ${getTransformClass()} ${className}`}
    >
      {children}
    </div>
  );
}
