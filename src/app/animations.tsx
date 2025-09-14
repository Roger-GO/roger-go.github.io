'use client';
import React, { PropsWithChildren, useEffect } from 'react';

export default function Animations({ children }: PropsWithChildren<{}>) {
  useEffect(() => {
    (async () => {
      try {
        // @ts-ignore
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
      } catch (error) {
        console.warn('LocomotiveScroll failed to load:', error);
      }
    })();
  }, []);

  return <div className="main">{children}</div>;
}
