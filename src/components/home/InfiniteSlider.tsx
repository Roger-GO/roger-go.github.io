'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

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
    { src: '/images/screenshot-17.png', alt: 'Research Visualization 17' },
    { src: '/images/Transport.png', alt: 'Transportation Research' },
    { src: '/images/bike.png', alt: 'Bike Design' },
    { src: '/images/theme.png', alt: 'Theme Design' },
    { src: '/images/logo.jpg', alt: 'Logo Design' },
    { src: '/images/linkedin.png', alt: 'LinkedIn' },
    { src: '/images/profile.jpg', alt: 'Profile' },
  ];

  // Split images into two different sets for each row
  const topSliderImages = allImages.slice(0, Math.ceil(allImages.length / 2));
  const bottomSliderImages = allImages.slice(Math.ceil(allImages.length / 2));

  return (
    <div className="relative z-10 mt-[50px] bg-background py-8">
      {/* Top Slider - Moving Left to Right */}
      <div className="mb-8 overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={{
            x: [0, -100 * topSliderImages.length],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {[...topSliderImages, ...topSliderImages].map((image, index) => (
            <div key={`top-${index}`} className="flex-shrink-0">
              <Link href="/portfolio" className="group cursor-pointer block">
                <div className="relative h-[200px] w-[250px] overflow-hidden rounded-xl shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 150px, (max-width: 1200px) 200px, 250px"
                  />
                </div>
              </Link>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Slider - Moving Right to Left */}
      <div className="mb-8 overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={{
            x: [-100 * bottomSliderImages.length, 0],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {[...bottomSliderImages, ...bottomSliderImages].map((image, index) => (
            <div key={`bottom-${index}`} className="flex-shrink-0">
              <Link href="/portfolio" className="group cursor-pointer block">
                <div className="relative h-[200px] w-[250px] overflow-hidden rounded-xl shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 150px, (max-width: 1200px) 200px, 250px"
                  />
                </div>
              </Link>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default InfiniteSlider;
