'use client';
import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '../lib/hooks';
import { sendEmail } from '../actions/sendEmail';
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';

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

      <form
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success('Email sent successfully!');
        }}
        className='mt-10 flex flex-col dark:text-black'
      >
        <input
          className='px-4 borderBlack h-14 rounded-lg
          dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-80
          transition-all dark:outline-none'
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
        p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-80
        transition-all dark:outline-none'
          placeholder='Your message'
        />

        <SubmitBtn />
      </form>
    </motion.section>
  );
};

export default Contact;
