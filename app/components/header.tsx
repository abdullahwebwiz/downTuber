'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default () => {
  const [state, setState] = useState(false);

  // Replace javascript:void(0) paths with your paths
  const navigation = [
    { title: 'About US', path: '#about' },
    { title: 'Contact US', path: '#contact' },
  ];

  const Brand = () => (
    <div className='flex items-center justify-between py-5 md:block'>
      <a href='javascript:void(0)'>
        <Image
          src='/images/logo.png'
          width={250}
          height={106}
          alt='logo'
        />
      </a>
      <div className='md:hidden'>
        <button
          className='menu-btn text-gray-400 hover:text-gray-300'
          onClick={() => setState(!state)}
        >
          {state ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                clipRule='evenodd'
              />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='h-6 w-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );

  return (
    <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
      <header>
        <div className={`md:hidden ${state ? 'mx-2 pb-5' : 'hidden'}`}>
          <Brand />
        </div>
        <nav
          className={`pb-5 md:text-sm ${state ? 'absolute inset-x-0 top-0 z-20 mx-2 mt-2 rounded-xl bg-gray-800 md:relative md:mx-0 md:mt-0 md:bg-transparent' : ''}`}
        >
          <div className='mx-auto max-w-screen-xl items-center gap-x-14 px-4 md:flex md:px-8'>
            <Brand />
            <div
              className={`mt-8 flex-1 items-center md:mt-0 md:flex ${state ? 'block' : 'hidden'} `}
            >
              <ul className='flex-1 items-center justify-end space-y-6 md:flex md:space-x-6 md:space-y-0'>
                {navigation.map((item, idx) => {
                  return (
                    <li key={idx} className='text-gray-100 hover:text-gray-400'>
                      <a href={item.path} className='block'>
                        {item.title}
                      </a>
                    </li>
                  );
                })}
                
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};
