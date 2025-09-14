import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import MenuButton from '@/components/nav/menuButton';
import React, { useState } from 'react';
import NavLinks from '@/components/nav/NavLinks';

const links = [
  {
    title: 'home',
    href: '/'
  },
  {
    title: 'publications',
    href: '/publications'
  },
  {
    title: 'awards & recognition',
    href: '/awards'
  },
  {
    title: 'teaching',
    href: '/teaching'
  },
  {
    title: 'work',
    href: '/work'
  },
  {
    title: 'portfolio',
    href: '/portfolio'
  },
  {
    title: 'cv',
    href: '/cv'
  }
];

const menu = {
  open: {
    transition: { duration: 0.75, type: 'tween', ease: [0.76, 0, 0.24, 1] }
  },
  closed: {
    transition: {
      duration: 0.75,
      delay: 0.35,
      type: 'tween',
      ease: [0.76, 0, 0.24, 1]
    }
  }
};

export default function Menu() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="fixed right-[20px] top-[20px] z-20 lg:right-[30px] lg:top-[30px]">
      <motion.div
        className={cn('relative rounded-3xl bg-secondary', {
          'lg:top-[-25px] right-[-15px] top-[-15px] h-[580px] w-[350px] sm:h-[600px] sm:w-[400px] lg:right-[-25px] lg:h-[620px] lg:w-[420px]':
            isActive,
          'right-0 top-0 h-[40px] w-[100px] opacity-0': !isActive
        })}
        variants={menu}
        animate={isActive ? 'open' : 'closed'}
        initial="closed"
      >
        <AnimatePresence>
          {isActive && (
            <div className="box-border flex h-full flex-col justify-between p-[80px_30px_40px] lg:p-[90px_40px_50px]">
              <NavLinks links={links} setIsActive={setIsActive} />
            </div>
          )}
        </AnimatePresence>
      </motion.div>
      <MenuButton
        isActive={isActive}
        toggleMenu={() => {
          setIsActive(!isActive);
        }}
      />
    </div>
  );
}
