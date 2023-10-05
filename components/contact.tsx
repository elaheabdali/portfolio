'use client';
import React from 'react';
import SectionHeading from './section-heading';
import { FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail';

const Contact = () => {
  const { ref } = useSectionInView('Contact');

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      id='contact'
      className='text-center mb-20 sm:mb-28 w-[min(100%,38rem)]'
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className='text-gray-700 -mt-6 dark:text-white/80'>
        Please contact me directly at{' '}
        <a href='mailto:example@gmail.com' className='underline'>
          example@gmail.com
        </a>{' '}
        or through this form.
      </p>

      <form action={sendEmail} className='mt-10 flex flex-col'>
        <input
          className='px-4 borderBlack h-14 rounded-lg'
          placeholder='Your email'
          type='email'
          name='senderEmail'
          required
          maxLength={500}
        />
        <textarea
          name='message'
          required
          maxLength={5000}
          className='h-52 my-3 rounded-lg borderBlack
        p-4'
          placeholder='Your message'
        />
        <button
          type='submit'
          className='group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900
        text-white rounded-full outline-none transition-all
        focus:scale-110 hover:scale-110
          active:scale-105 hover:bg-gray-950'
        >
          Submit{' '}
          <FaPaperPlane
            className='text-xs opacity-70
          transition-all group-hover:translate-x-1
          group-hover:-translate-y-1'
          />
        </button>
      </form>
    </motion.section>
  );
};

export default Contact;
