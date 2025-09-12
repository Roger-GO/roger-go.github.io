'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './InfiniteSlider.css';

const InfiniteSlider = () => {
  // Define the images
  const images = [
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

  return (
    <div className="relative z-10 mt-[200px] bg-background">
      {/* First Row - Left to Right */}
      <div className="mb-8">
        <div className="scroller">
          <ul className="scroller__list">
            {images.map((image, index) => (
              <li key={index} className="scroller__item">
                <Link href="/portfolio" className="group cursor-pointer">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={0}
                    height={200}
                    className="h-[200px] w-auto object-contain"
                    sizes="(max-width: 768px) 150px, (max-width: 1200px) 200px, 400px"
                  />
                </Link>
              </li>
            ))}
            {/* Duplicate for seamless loop */}
            {images.map((image, index) => (
              <li key={`duplicate-${index}`} className="scroller__item" aria-hidden="true">
                <Link href="/portfolio" className="group cursor-pointer">
                  <Image
                    src={image.src}
                    alt=""
                    width={0}
                    height={200}
                    className="h-[200px] w-auto object-contain"
                    sizes="(max-width: 768px) 150px, (max-width: 1200px) 200px, 400px"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Second Row - Right to Left (reversed) */}
      <div className="mb-8">
        <div className="scroller">
          <ul className="scroller__list" style={{ animationDirection: 'reverse' }}>
            {images.map((image, index) => (
              <li key={`reverse-${index}`} className="scroller__item">
                <Link href="/portfolio" className="group cursor-pointer">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={0}
                    height={200}
                    className="h-[200px] w-auto object-contain"
                    sizes="(max-width: 768px) 150px, (max-width: 1200px) 200px, 400px"
                  />
                </Link>
              </li>
            ))}
            {/* Duplicate for seamless loop */}
            {images.map((image, index) => (
              <li key={`reverse-duplicate-${index}`} className="scroller__item" aria-hidden="true">
                <Link href="/portfolio" className="group cursor-pointer">
                  <Image
                    src={image.src}
                    alt=""
                    width={0}
                    height={200}
                    className="h-[200px] w-auto object-contain"
                    sizes="(max-width: 768px) 150px, (max-width: 1200px) 200px, 400px"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InfiniteSlider;
