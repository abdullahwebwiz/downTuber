'use client';
import { useState } from 'react';
import TableComponent from './table';
import Swal from 'sweetalert2';
import SyncLoader from 'react-spinners/SyncLoader';
import axios from 'axios';
export const Herobar = () => {
  let [link, setLink]: any = useState('');
  let [animation, setAnimation]: any = useState(false);
  let [data, setData]: any = useState(null);

  let handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(process.env.NEXT_PUBLIC_API_HOST);
    console.log(process.env.NEXT_PUBLIC_API_KEY);
    console.log(process.env.NEXT_PUBLIC_API_URL);
    if (link) {
      try {
        setAnimation(true);

        const response = await axios({
          method: 'POST',
          url: process.env.NEXT_PUBLIC_API_URL,
          headers: {
            'x-rapidapi-key': process.env.NEXT_PUBLIC_API_KEY,
            'x-rapidapi-host': process.env.NEXT_PUBLIC_API_HOST,
            'Content-Type': 'application/json',
          },
          data: {
            url: link,
          },
        });
        console.log(response.data?.error);
        setAnimation(false);
        if (response.data?.error) {
          Swal.fire({
            title: 'Oops!',
            text: 'You may have entered wrong link. Try again',
            icon: 'error',
          });
        } else {
          setData(response.data);
        }
      } catch (error) {
        console.error('Error during POST request:', error);
        Swal.fire({
          title: 'Oops!',
          text: 'Something went wrong, plz try again.',
          icon: 'question',
        });
        setAnimation(false);
      }
    } else {
      Swal.fire({
        title: 'Oops!',
        text: 'Kindly provide the link.',
        icon: 'question',
      });
    }
  };
  return (
    <div
      id='herobar'
      className='relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'
    >
      <div className='absolute inset-x-0 bottom-0'>
        <svg
          viewBox='0 0 224 12'
          fill='currentColor'
          className='-mb-1 w-full text-white'
          preserveAspectRatio='none'
        >
          <path d='M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z' />
        </svg>
      </div>
      <div className='mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20'>
        <div className='relative max-w-2xl sm:mx-auto sm:max-w-xl sm:text-center md:max-w-2xl'>
          <h2 className='mb-6 font-sans text-5xl font-bold tracking-tight text-white sm:text-5xl sm:leading-none'>
            <span
              className='text-pink-500'
              style={{ WebkitTextStroke: '1px white' }}
            >
              Download
            </span>{' '}
            any video for free.
            <span className='mt-4 block'>NO Ads</span>{' '}
            {/* Added margin on top */}
          </h2>

          <p className='mb-6 text-base font-thin tracking-wide text-gray-100 md:text-lg'>
            "Download videos from YouTube, Facebook, Instagram, TikTok,
            LinkedIn, and more without any irritating ads. Fast, simple, and
            ad-free!"
          </p>
          <form
            onSubmit={handleSubmit}
            className='mb-4 flex w-full flex-col items-center md:flex-row md:px-16'
          >
            <input
              value={link}
              onChange={(e: any) => setLink(e.target.value)}
              placeholder='Enter link..'
              required
              type='text'
              className='focus:border-deep-purple-accent-200 focus:shadow-outline mb-3 h-12 w-full flex-grow appearance-none rounded border-2 border-gray-400 bg-transparent px-4 text-white transition duration-200 focus:outline-none md:mb-0 md:mr-2'
            />
            <button
              type='submit'
              className='bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline inline-flex h-12 w-full items-center justify-center rounded px-6 font-medium tracking-wide text-white shadow-md transition duration-200 focus:outline-none md:w-auto'
            >
              Download
            </button>
          </form>
          {animation ? (
            <>
              {' '}
              <section className='flex items-center justify-center'>
                <SyncLoader color='pink' />
              </section>
            </>
          ) : (
            <TableComponent data={data} />
          )}
        </div>
      </div>
    </div>
  );
};
