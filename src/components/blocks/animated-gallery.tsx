'use client';

import {
  useRef,
  useContext,
  createContext,
  type ReactNode,
  type CSSProperties,
} from 'react';
import {
  HTMLMotionProps,
  MotionValue,
  Variants,
  motion,
  useScroll,
  useTransform,
  useInView,
  useMotionValue,
} from "motion/react";
import { cn } from '@/lib/utils';

const ScrollProgressContext = createContext<MotionValue<number> | null>(null);

export function ContainerScroll({
  children,
  className,
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  return (
    <ScrollProgressContext.Provider value={scrollYProgress}>
      <div ref={ref} className={cn('relative', className)} style={style}>
        {children}
      </div>
    </ScrollProgressContext.Provider>
  );
}

export function ContainerSticky({
  children,
  className,
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      className={cn('sticky top-0 overflow-hidden', className)}
      style={style}
    >
      {children}
    </div>
  );
}

export function ContainerStagger({
  children,
  className,
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.12, delayChildren: 0.05 },
        },
      }}
      style={style}
    >
      {children}
    </motion.div>
  );
}

export function ContainerAnimated({ children }: { children: ReactNode }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function GalleryContainer({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        display: 'flex',
        gap: 16,
        height: '100%',
        width: '100%',
        padding: '0 24px',
        boxSizing: 'border-box',
        alignItems: 'flex-start',
      }}
    >
      {children}
    </div>
  );
}

export function GalleryCol({
  children,
  yRange = ['-10%', '2%'],
  className,
  style,
}: {
  children: ReactNode;
  yRange?: [string, string];
  className?: string;
  style?: CSSProperties;
}) {
  const scrollProgress = useContext(ScrollProgressContext);
  const fallback = useMotionValue(0);
  const y = useTransform(scrollProgress ?? fallback, [0, 1], yRange);

  return (
    <motion.div
      className={cn('flex flex-1 flex-col gap-4', className)}
      style={{ y, ...style }}
    >
      {children}
    </motion.div>
  );
}
