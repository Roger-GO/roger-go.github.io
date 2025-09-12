'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const InfiniteSlider = () => {
  // Define the images with their aspect ratios preserved (excluding Me.jpeg)
  const allImages = [
    { src: '/images/drones.png', alt: 'Drone Swarm Research', aspectRatio: 16/9 },
    { src: '/images/screenshot-1.png', alt: 'Research Visualization 1', aspectRatio: 16/9 },
    { src: '/images/screenshot-2.png', alt: 'Research Visualization 2', aspectRatio: 16/9 },
    { src: '/images/screenshot-3.png', alt: 'Research Visualization 3', aspectRatio: 16/9 },
    { src: '/images/screenshot-4.png', alt: 'Research Visualization 4', aspectRatio: 16/9 },
    { src: '/images/screenshot-5.png', alt: 'Research Visualization 5', aspectRatio: 16/9 },
    { src: '/images/screenshot-6.png', alt: 'Research Visualization 6', aspectRatio: 16/9 },
    { src: '/images/screenshot-7.png', alt: 'Research Visualization 7', aspectRatio: 16/9 },
    { src: '/images/screenshot-8.png', alt: 'Research Visualization 8', aspectRatio: 16/9 },
    { src: '/images/screenshot-9.png', alt: 'Research Visualization 9', aspectRatio: 16/9 },
    { src: '/images/screenshot-10.png', alt: 'Research Visualization 10', aspectRatio: 16/9 },
    { src: '/images/screenshot-11.png', alt: 'Research Visualization 11', aspectRatio: 16/9 },
    { src: '/images/screenshot-12.png', alt: 'Research Visualization 12', aspectRatio: 16/9 },
    { src: '/images/screenshot-13.png', alt: 'Research Visualization 13', aspectRatio: 16/9 },
    { src: '/images/screenshot-14.png', alt: 'Research Visualization 14', aspectRatio: 16/9 },
    { src: '/images/screenshot-15.png', alt: 'Research Visualization 15', aspectRatio: 16/9 },
    { src: '/images/screenshot-16.png', alt: 'Research Visualization 16', aspectRatio: 16/9 },
    { src: '/images/screenshot-17.png', alt: 'Research Visualization 17', aspectRatio: 16/9 },
    { src: '/images/Transport.png', alt: 'Transportation Research', aspectRatio: 16/9 },
  ];

  // Split images into two different sets for each row
  const row1Images = allImages.slice(0, Math.ceil(allImages.length / 2));
  const row2Images = allImages.slice(Math.ceil(allImages.length / 2));

  // Duplicate the images for seamless infinite scroll
  const duplicatedRow1Images = [...row1Images, ...row1Images];
  const duplicatedRow2Images = [...row2Images, ...row2Images];

  return (
    <div className="relative z-10 mt-[200px] bg-background overflow-hidden">
      {/* First Row - Left to Right */}
      <div className="mb-8">
        <div className="flex animate-scroll-left hover:pause-animation">
          {duplicatedRow1Images.map((image, index) => (
            <Link
              key={`row1-${index}`}
              href="/portfolio"
              className="flex-shrink-0 mx-4 group cursor-pointer"
            >
              <div 
                className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
                style={{ 
                  height: '200px',
                  width: `${200 * image.aspectRatio}px`,
                  minWidth: '150px',
                  maxWidth: '400px'
                }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 150px, (max-width: 1200px) 200px, 400px"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Second Row - Right to Left */}
      <div className="mb-8">
        <div className="flex animate-scroll-right hover:pause-animation">
          {duplicatedRow2Images.map((image, index) => (
            <Link
              key={`row2-${index}`}
              href="/portfolio"
              className="flex-shrink-0 mx-4 group cursor-pointer"
            >
              <div 
                className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
                style={{ 
                  height: '200px',
                  width: `${200 * image.aspectRatio}px`,
                  minWidth: '150px',
                  maxWidth: '400px'
                }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 150px, (max-width: 1200px) 200px, 400px"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteSlider;
