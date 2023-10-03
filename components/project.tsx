'use client';
import React, { useRef } from 'react';
import SectionHeading from './section-heading';
import { projectsData } from '@/lib/data';
import Image from 'next/image';
import { useScroll, motion, useTransform } from 'framer-motion';

type ProjectProps = (typeof projectsData)[number];

const Project = ({ title, description, tags, imageUrl }: ProjectProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });
  const scaleProgress = useTransform(scrollYProgress, [0,1], [0.8,1])
  const opacityProgress = useTransform(scrollYProgress, [0,1], [0.6,1])
  return (
    <motion.div className='group mb-3 sm:mb-8 last:mb-0'
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      ref={ref}
    >
      <section
        className='relative rounded-lg bg-gray-100 max-w-[42rem] 
    border border-black/5 overflow-hidden sm:pr-8
     sm:h-[20rem] group-even:even:pl-8
     hover:bg-gray-200 transition'
      >
        <div
          className='group-even:ml-[18rem] flex flex-col h-full
      pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%]'
        >
          <h3 className='text-2xl font-semibold'>{title}</h3>
          <p
            className='mt-2 leading-relaxed
      text-gray-700'
          >
            {description}{' '}
          </p>
          <ul className='flex flex-wrap sm:mt-auto mt-4 gap-2 '>
            {tags.map((tag, index) => (
              <li
                className='bg-black/[0.7] px-3 py-1 text-[0.7rem]
          uppercase tracking-wider text-white rounded-full'
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt={title}
          quality={95}
          className='absolute top-8 -right-40 w-[28.25rem]
        rounded-top-lg shadow-2xl transition
        group-hover:-translate-x-3
        group-hover:-translate-y-3
        group-hover:-rotate-2
        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2
        group-hover:scale-[1.04]
        group-even:right-[initial]
        group-even:-left-40'
        />
      </section>
    </motion.div>
  );
};

export default Project;