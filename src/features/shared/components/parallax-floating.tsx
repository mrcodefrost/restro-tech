"use client";

import {
  createContext,
  type CSSProperties,
  type ReactNode,
  useContext,
  useEffect,
  useRef,
} from "react";
import { useAnimationFrame } from "framer-motion";

type FloatingItem = {
  element: HTMLDivElement;
  depth: number;
  currentX: number;
  currentY: number;
};

type FloatingContextValue = {
  register: (element: HTMLDivElement, depth: number) => () => void;
};

const FloatingContext = createContext<FloatingContextValue | null>(null);

export function ParallaxFloating({
  children,
  className = "",
  sensitivity = 68,
}: {
  children: ReactNode;
  className?: string;
  sensitivity?: number;
}) {
  const boundsRef = useRef<HTMLDivElement | null>(null);
  const itemsRef = useRef<FloatingItem[]>([]);
  const pointerRef = useRef({ x: 0, y: 0 });
  const reduceMotionRef = useRef(false);

  useEffect(() => {
    reduceMotionRef.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Track pointer position on `window`, not on this element: the overlay
    // is `pointer-events-none` (so page content underneath stays clickable),
    // which means it never receives its own pointer events.
    const updatePointer = (clientX: number, clientY: number) => {
      const bounds = boundsRef.current?.getBoundingClientRect();
      if (!bounds) return;
      pointerRef.current = {
        x: (clientX - bounds.left) / bounds.width - 0.5,
        y: (clientY - bounds.top) / bounds.height - 0.5,
      };
    };

    const handleMouseMove = (event: MouseEvent) => {
      updatePointer(event.clientX, event.clientY);
    };
    const handleTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (!touch) return;
      updatePointer(touch.clientX, touch.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  const register = (element: HTMLDivElement, depth: number) => {
    const item = { element, depth, currentX: 0, currentY: 0 };
    itemsRef.current.push(item);

    return () => {
      itemsRef.current = itemsRef.current.filter((entry) => entry !== item);
    };
  };

  useAnimationFrame(() => {
    if (reduceMotionRef.current) return;

    itemsRef.current.forEach((item) => {
      const targetX = pointerRef.current.x * item.depth * sensitivity;
      const targetY = pointerRef.current.y * item.depth * sensitivity;

      item.currentX += (targetX - item.currentX) * 0.08;
      item.currentY += (targetY - item.currentY) * 0.08;
      item.element.style.transform = `translate3d(${item.currentX}px, ${item.currentY}px, 0)`;
    });
  });

  return (
    <FloatingContext.Provider value={{ register }}>
      <div ref={boundsRef} className={className}>
        {children}
      </div>
    </FloatingContext.Provider>
  );
}

export function FloatingElement({
  children,
  depth = 1,
  className = "",
  style,
}: {
  children: ReactNode;
  depth?: number;
  className?: string;
  style?: CSSProperties;
}) {
  const context = useContext(FloatingContext);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!context || !elementRef.current) return undefined;
    return context.register(elementRef.current, depth);
  }, [context, depth]);

  return (
    <div ref={elementRef} className={className} style={style}>
      {children}
    </div>
  );
}
