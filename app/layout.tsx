import Header from '../components/header';
import './globals.css';
import { Inter } from 'next/font/google';
import ActiveSectionContextProvider from '../context/active-section-context';
import { Toaster } from 'react-hot-toast';
import Footer from '@components/footer';
import ThemeSwitch from '../components/theme-switch';
import ThemeContextProvider from '../context/theme-context';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Elahe | Personal Portfolio',
  description: 'Elahe is a front-end developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='!scroll-smooth'>
      <body
        className={`${inter.className}
      bg-gray-50 relative pt-28 text-gray-950
      sm:pt-36 dark:bg-gray-900 dark:text-gray-50
      dark:opacity-90`}
      >
        <div
          className='bg-[#fbe2e3] absolute top-[-6rem]
        right-[11rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full
        blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]'
        ></div>
        <div
          className='bg-[#dbd7fb] absolute top-[-1rem]
        left-[35rem] -z-10 h-[31.25rem] w-[50rem] rounded-full
        blur-[10rem] sm:w-[68.75rem] md:left-[-33rem]
        lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]
        dark:bg-[#676394]'
        ></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position='top-right' />
          <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
