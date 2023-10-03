'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';

const Intro = () => {
  return (
    <section
      id='home'
      className='scroll-mt-[100rem] mb-28 max-w-[50rem] text-center
    sm:mb-0'
    >
      <div className='flex items-center justify-center'>
        <div className='relative'>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'tween', duration: 0.2 }}
          >
            <Image
              src='https://images.unsplash.com/photo-1605433235628-489951ba1978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDg5fFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
              alt='Elahe Abdali'
              width='192'
              height='192'
              quality='95'
              priority={true}
              className='h-24 w-24 rounded-full object-cover
            border-[0.35rem] border-white shadow-xl'
            />
          </motion.div>

          <motion.span
            className='text-2xl absolute 
          bottom-0 right-0'
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋🏻
          </motion.span>
        </div>
      </div>

      <motion.h1
        className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className='font-bold'>Hello, I'm Elahe.</span> I'm a{' '}
        <span className='font-bold'>front-end developer</span> with{' '}
        <span className='font-bold'>2 years</span> of experience. I enjoy
        building <span className='italic'>sites & apps</span>. My focus is{' '}
        <span className='underline'>React (Next.js)</span>.
      </motion.h1>

      <motion.div
        className='flex flex-col sm:flex-row items-center
      justify-center gap-2 px-4 text-lg font-medium'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href='#contact'
          className='group bg-gray-900 text-white
        px-7 py-3 flex items-center gap-2 rounded-full
        outline-none focus:scale-110 hover:scale-110
        hover:bg-gray-950 active:scale-105 transition'
        >
          Contact me here
          <BsArrowRight
            className='
          group-hover:translate-x-1 transition opacity-70'
          />
        </Link>

        <a
          className='group outline-none focus:scale-110 hover:scale-110
          active:scale-105 transition cursor-pointer
          border border-black/10
        bg-white px-7 py-3 flex items-center gap-2 rounded-full'
          href='/public/CV.pdf'
          download
        >
          Download CV
          <HiDownload
            className='opacity-60 
          group-hover:translate-y-1 transition'
          />
        </a>

        <a
          className='bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60'
          href='https://linkedin.com'
          target='_blank'
        >
          <BsLinkedin />
        </a>

        <a
          className='bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60'
          href='https://github.com'
          target='_blank'
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
