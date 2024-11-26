export const Feature = () => {
  const platforms: any = [
    {
      title: 'Social Media',
      list: [
        'Tiktok',
        'Douyin',
        'Threads (Th.ds)',
        'Instagram (In.gram)',
        'Facebook (f.𝒷)',
        'Pinterest',
        'Reddit',
        'Snapchat',
        'LinkedIn',
        'Tumblr',
        'Weibo',
        'ShareChat',
        'Likee',
      ],
      icon: (
        <svg
          className='h-8 w-8 text-red-500'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        >
          <path d='M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z' />
        </svg>
      ),
    },
    {
      title: 'Video Sharing/Streaming',
      list: [
        'YouTube',
        'Vimeo',
        'Bilibili',
        'Dailymotion',
        'Rumble',
        'Streamable',
        'Ted',
        'SohuTv',
        'Izlesene',
        'Xiaohongshu',
        'Ixigua',
        'Miaopai',
        'Meipai',
        'Xiaoying',
        'National Video',
        'Yingke',
      ],
      icon: (
        <svg
          className='h-8 w-8 text-red-500'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        >
          <path d='M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z' />
          <polygon points='9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02' />
        </svg>
      ),
    },
    {
      title: 'Audio/Streaming',
      list: ['SoundCloud', 'Mixcloud', 'Spotify', 'Zingmp3', 'Bandcamp'],
      icon: (
        <svg
          className='h-8 w-8 text-red-500'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          stroke-width='2'
          stroke='currentColor'
          fill='none'
          stroke-linecap='round'
          stroke-linejoin='round'
        >
          <path stroke='none' d='M0 0h24v24H0z' />
          <circle cx='6' cy='17' r='3' />
          <circle cx='16' cy='17' r='3' />
          <polyline points='9 17 9 4 19 4 19 17' />
          <line x1='9' y1='8' x2='19' y2='8' />
        </svg>
      ),
    },
    {
      title: 'Entertainment and Humor',
      list: ['iFunny', '9GAG'],
      icon: (
        <svg
          className='h-8 w-8 text-red-500'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        >
          <rect x='2' y='2' width='20' height='20' rx='2.18' ry='2.18' />
          <line x1='7' y1='2' x2='7' y2='22' />
          <line x1='17' y1='2' x2='17' y2='22' />
          <line x1='2' y1='12' x2='22' y2='12' />
          <line x1='2' y1='7' x2='7' y2='7' />
          <line x1='2' y1='17' x2='7' y2='17' />
          <line x1='17' y1='17' x2='22' y2='17' />
          <line x1='17' y1='7' x2='22' y2='7' />
        </svg>
      ),
    },
    {
      title: 'Gaming and Creative',
      list: ['Getstickerpack', 'CapCut'],
      icon: (
        <svg
          className='h-8 w-8 text-red-500'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          stroke-width='2'
          stroke='currentColor'
          fill='none'
          stroke-linecap='round'
          stroke-linejoin='round'
        >
          <path stroke='none' d='M0 0h24v24H0z' />
          <rect x='2' y='6' width='20' height='12' rx='2' />
          <path d='M6 12h4m-2 -2v4' />
          <line x1='15' y1='11' x2='15' y2='11.01' />
          <line x1='18' y1='13' x2='18' y2='13.01' />
        </svg>
      ),
    },
    {
      title: 'News and Information',
      list: ['ESPN', 'IMDb'],
      icon: (
        <svg
          className='h-8 w-8 text-red-500'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
            d='M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z'
          />
        </svg>
      ),
    },
  ];

  return (
    <div id="about" className='mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20'>
      <div className='mb-6 flex flex-col md:mb-10 lg:flex-row'>
        <div className='lg:w-1/2'>
          <h2 className='mb-6 max-w-md font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none xl:max-w-lg'>
            <span className='text-indigo-500'>Fast ⚡</span>
            <span className='text-purple-500'>Plus ⚡</span>
            <span className='text-pink-500'>NO Ads! ⚡</span>
          </h2>
        </div>
        <div className='lg:w-1/2'>
          <p className='text-base text-gray-700 md:text-lg'>
            Downtuber is your go-to video downloader, allowing you to
            effortlessly download videos from over 50 social media platforms.
            It's completely free and provides a seamless, ad-free experience—no
            annoying popups, just fast and reliable downloads.
          </p>
        </div>
      </div>
      <div className='row-gap-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4'>
        {platforms.map((d: any, i: any) => {
          return (
            <div key={i}>
              <div className='mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-50'>
                {d.icon}
              </div>
              <h6 className='mb-2 font-semibold leading-5'>{d.title}</h6>
              <ul className='-ml-1 mb-4 space-y-2'>
                {d.list.map((d: any) => {
                  return (
                    <li className='flex items-start' key={d}>
                      <span className='mr-1'>
                        <svg
                          className='text-deep-purple-accent-400 mt-px h-5 w-5'
                          stroke='currentColor'
                          viewBox='0 0 52 52'
                        >
                          <polygon
                            strokeWidth='4'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            fill='none'
                            points='29 13 14 29 25 29 23 39 38 23 27 23'
                          />
                        </svg>
                      </span>
                      {d}
                    </li>
                  );
                })}
              </ul>
              <a href='#herobar'>
                <button
                  type='submit'
                  className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  focus:shadow-outline inline-flex h-12 w-full items-center justify-center rounded px-6 font-medium tracking-wide text-white shadow-md transition duration-200 focus:outline-none md:w-auto'
                >
                  Get Started
                </button>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};
