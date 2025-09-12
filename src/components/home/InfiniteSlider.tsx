'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import styles from './InfiniteSlider.module.css';

const InfiniteSlider = () => {
  // Define all the images
  const allImages = [
    { src: '/images/drones.png', alt: 'Drone Swarm Research' },
    { src: '/images/screenshot-1.png', alt: 'Research Visualization 1' },
    { src: '/images/screenshot-2.png', alt: 'Research Visualization 2' },
    { src: '/images/screenshot-3.png', alt: 'Research Visualization 3' },
    { src: '/images/screenshot-4.png', alt: 'Research Visualization 4' },
    { src: '/images/screenshot-5.png', alt: 'Research Visualization 5' },
    { src: '/images/screenshot-7.png', alt: 'Research Visualization 7' },
    { src: '/images/screenshot-8.png', alt: 'Research Visualization 8' },
    { src: '/images/screenshot-9.png', alt: 'Research Visualization 9' },
    { src: '/images/screenshot-10.png', alt: 'Research Visualization 10' },
    { src: '/images/screenshot-11.png', alt: 'Research Visualization 11' },
    { src: '/images/screenshot-12.png', alt: 'Research Visualization 12' },
    { src: '/images/screenshot-13.png', alt: 'Research Visualization 13' },
    { src: '/images/screenshot-14.png', alt: 'Research Visualization 14' },
    { src: '/images/screenshot-16.png', alt: 'Research Visualization 16' },
    { src: '/images/Transport.png', alt: 'Transportation Research' },
  ];

  // Split images into two different sets for each row
  const row1Images = allImages.slice(0, Math.ceil(allImages.length / 2));
  const row2Images = allImages.slice(Math.ceil(allImages.length / 2));

  return (
    <div className="relative z-10 mt-[200px] bg-background">
      {/* First Row - Left to Right */}
      <div className="mb-8">
        <div className={styles.scroller}>
          <motion.div
            className={styles.scroller__inner}
            animate={{
              x: '-50%', // This moves the container by half of its total width
            }}
            transition={{
              duration: 40, // Adjust for speed. Higher number = slower scroll
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'linear',
            }}
          >
            {/* Render the images once... */}
            {row1Images.map((image, index) => (
              <div key={index} className={styles.scroller__item}>
                <Link href="/portfolio" className="group cursor-pointer">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={250}
                    height={200}
                    className="object-contain"
                    sizes="(max-width: 768px) 150px, (max-width: 1200px) 200px, 400px"
                  />
                </Link>
              </div>
            ))}
            {/* ...and then render them again for the seamless loop */}
            {row1Images.map((image, index) => (
              <div key={`duplicate-${index}`} className={styles.scroller__item} aria-hidden="true">
                <Link href="/portfolio" className="group cursor-pointer">
                  <Image
                    src={image.src}
                    alt=""
                    width={250}
                    height={200}
                    className="object-contain"
                    sizes="(max-width: 768px) 150px, (max-width: 1200px) 200px, 400px"
                  />
                </Link>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Second Row - Right to Left (reversed) */}
      <div className="mb-8">
        <div className={styles.scroller}>
          <motion.div
            className={styles.scroller__inner}
            animate={{
              x: '50%', // This moves the container by half of its total width in reverse
            }}
            transition={{
              duration: 40, // Adjust for speed. Higher number = slower scroll
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'linear',
            }}
          >
            {/* Render the images once... */}
            {row2Images.map((image, index) => (
              <div key={`reverse-${index}`} className={styles.scroller__item}>
                <Link href="/portfolio" className="group cursor-pointer">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={250}
                    height={200}
                    className="object-contain"
                    sizes="(max-width: 768px) 150px, (max-width: 1200px) 200px, 400px"
                  />
                </Link>
              </div>
            ))}
            {/* ...and then render them again for the seamless loop */}
            {row2Images.map((image, index) => (
              <div key={`reverse-duplicate-${index}`} className={styles.scroller__item} aria-hidden="true">
                <Link href="/portfolio" className="group cursor-pointer">
                  <Image
                    src={image.src}
                    alt=""
                    width={250}
                    height={200}
                    className="object-contain"
                    sizes="(max-width: 768px) 150px, (max-width: 1200px) 200px, 400px"
                  />
                </Link>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default InfiniteSlider;
