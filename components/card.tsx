'use client';
import { motion, useMotionTemplate, useSpring } from 'framer-motion';

import { PropsWithChildren, type MouseEvent } from 'react';

export const Card: React.FC<PropsWithChildren> = ({ children }) => {
  const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 100 });

  function onMouseMove(e: MouseEvent<HTMLDivElement>) {
    const { clientX, clientY, currentTarget } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  const maskImage = useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div
      tabIndex={0}
      onMouseMove={onMouseMove}
      className='overflow-hidden relative duration-700 border rounded-xl hover:bg-gray-800/10 group md:gap-8 hover:border-gray-400/50 border-gray-600'
      role='button'
    >
      <div className='pointer-events-none'>
        <div className='absolute inset-0 z-0  transition duration-1000 [mask-image:linear-gradient(black,transparent)]' />
        <motion.div
          className='absolute inset-0 z-10  bg-gradient-to-br opacity-100  via-gray-100/10  transition duration-1000 group-hover:opacity-50 '
          style={style}
        />
        <motion.div
          className='absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100'
          style={style}
        />
      </div>

      {children}
    </div>
  );
};