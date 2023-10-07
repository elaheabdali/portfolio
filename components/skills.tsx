'use client';
import React from 'react';
import SectionHeading from './section-heading';
import { skillsData } from '../lib/data';
import { useSectionInView } from '../lib/hooks';
import { motion } from 'framer-motion';

const fadeInAnimation = {
  initial: { y: 100, opacity: 0 },
  animate: (index: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const Skills = () => {
  const { ref } = useSectionInView('Skills');
  return (
    <section
      id='skills'
      ref={ref}
      className='mb-28 max-w-[53rem] scroll-mt-28
    text-center sm:mb-40'
    >
      <SectionHeading>My skills</SectionHeading>
      <ul
        className='flex flex-wrap justify-center gap-2
      text-lg text-gray-800 dark:bg-white/10 dark:text-white/80'
      >
        {skillsData.map((skill, index) => (
          <motion.li
            variants={fadeInAnimation}
            initial='initial'
            whileInView='animate'
            viewport={{
              once: true,
            }}
            custom={index}
            className='bg-white border border-black/[0.1]
          rounded-xl px-5 py-3 dark:bg-white/10
          dark:text-white/80'
            key={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
