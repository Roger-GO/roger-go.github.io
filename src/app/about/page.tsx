'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import Layout from '@/components/layout';
import Link from 'next/link';

export default function About() {
  const starsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate stars
    if (!starsRef.current) return;
    gsap.to(starsRef.current?.children, {
      y: 'random(-20, 20)',
      x: 'random(-20, 20)',
      rotation: 'random(-360, 360)',
      duration: 3,
      ease: 'none',
      repeat: -1,
      yoyo: true,
      stagger: 0.1
    });
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-blue-200 via-slate-300 to-blue-200">
      <Layout title="About Rogelio" center>
        <div className="relative min-h-screen">
          <div ref={starsRef}>
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute h-1 w-1 rounded-full bg-white opacity-70"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`
                }}
              />
            ))}
          </div>

          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
              <div className="flex flex-col gap-10">
                <div className="relative">
                  <div className="rounded-full blur-3xl" />
                  <Image
                    className="relative z-10 mx-auto h-auto w-full max-w-sm rounded-t-full shadow-lg"
                    width={1440}
                    height={1800}
                    src="/images/profile2.jpg"
                    alt="Rogelio Gracia profile picture"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-10">
                <div className="text-primary-950/70 dark:text-primary-200/70 space-y-8">
                  <p className="text-2xl font-semibold">
                    Ph.D. Candidate in Computer Science and Electrical Engineering with expertise in resilience engineering, machine learning, and complex systems analysis.
                  </p>
                  <p className="text-lg sm:text-xl">
                    Experienced in leading cross-functional research on bifurcation analysis, aerial robotics, and AI applications for critical infrastructure and aerospace.
                  </p>
                  <p className="text-lg sm:text-xl">
                    Currently Graduate Research / Teaching Assistant at{' '}
                    <Link
                      href="https://erau.edu/"
                      className="font-semibold underline"
                    >
                      Embry-Riddle Aeronautical University
                    </Link>
                    , leading machine learning and AI data-driven initiatives in the BID4R lab, directing cross-functional research teams.
                  </p>
                  <p className="text-lg sm:text-xl">
                    Published findings in 10+ conference and symposium proceedings including INCOSE and ASME conferences. Developed and delivered course content for 150+ students in Electrical Engineering and Systems courses.
                  </p>
                  <p className="text-lg sm:text-xl">
                    Previously worked as Associate Financial Analyst at{' '}
                    <Link
                      href="https://www.linkedin.com/company/imagine-inversion/"
                      className="font-semibold underline"
                    >
                      IMAGINE + INVERSION
                    </Link>
                    , where I engineered data mining strategies and achieved 50% reply rates from decision-makers through targeted outreach.
                  </p>
                  <p className="text-lg sm:text-xl">
                    Earlier experience as Project Manager at BALLESOL, where I led the creation and implementation of centralized business models, reducing operational costs by 30% and managing cross-functional teams across multiple facilities.
                  </p>
                  <p className="text-lg sm:text-xl">
                    Educational background includes Ph.D. studies at Embry-Riddle (GPA: 4.0/4.0), Master&apos;s in Mechanical Engineering from Embry-Riddle (GPA: 3.83/4.0), and degrees in Industrial Technologies Engineering from ICAI Universidad Pontificia de Comillas, Madrid, Spain.
                  </p>
                </div>
              </div>
            </div>
            <Link
              className="flex flex-col gap-10 pt-10"
              href="https://github.com/roger-go"
            >
              <div className="text-center">
                <p className="text-lg text-slate-600">Visit my GitHub profile to see my latest projects and contributions</p>
              </div>
            </Link>
          </div>
        </div>
      </Layout>
    </div>
  );
}
