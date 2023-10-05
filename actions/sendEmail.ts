'use server';

import { validate, getErrorMessage } from '../lib/utils';
import { Resend } from 'resend';
import Email from '../email/email';
import React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const message = formData.get('message');
  const senderEmail = formData.get('senderEmail');

  if (!validate(senderEmail, 500)) {
    return {
      error: 'Invalid sender email',
    };
  }

  if (!validate(message, 5000)) {
    return {
      error: 'Invalid message ',
    };
  }

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'ohelahe@gmail.com',
      subject: 'Message sent from contact form',
      reply_to: senderEmail as string,
      react: React.createElement(Email, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error: any) {
    return {
      error: getErrorMessage(error),
    };
  }
};
