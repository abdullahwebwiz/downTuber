'use client';
import Image from 'next/image';
import React from 'react';

const TableComponent = ({ data }: any) => {
  console.log('lol');
  console.log(data);

  return (
    <section className='container mx-auto px-4'>
      {data ? (
        <>
          <div className='max-w-2xl overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-800'>
            <div className='p-6'>
              <div>
                <span className='text-xs font-medium uppercase text-blue-600 dark:text-blue-400'>
                  {data.source}
                </span>
                <a
                  href='#'
                  className='mt-2 block transform text-xl font-semibold text-gray-800 transition-colors duration-300 hover:text-gray-600 hover:underline dark:text-white'
                  tabIndex={0}
                  role='link'
                >
                  {data.title}
                </a>
              </div>
              <div className='mt-4'>
                <div className='flex items-center'>
                  <div className='flex items-center'>
                    <a
                      href='#'
                      className='mx-2 font-semibold text-gray-700 dark:text-gray-200'
                      tabIndex={0}
                      role='link'
                    >
                      {data.author}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='mt-6 flex flex-col'>
            <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
              <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
                <div className='overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg'>
                  <table className='min-w-full divide-y divide-gray-200 dark:divide-gray-700'>
                    <thead className='bg-gray-50 dark:bg-gray-800'>
                      <tr>
                        <th
                          scope='col'
                          className='px-12 py-3.5 text-left text-sm font-normal text-gray-500 dark:text-gray-400 rtl:text-right'
                        >
                          No.
                        </th>

                        <th
                          scope='col'
                          className='px-4 py-3.5 text-left text-sm font-normal text-gray-500 dark:text-gray-400 rtl:text-right'
                        >
                          Quality
                        </th>

                        <th
                          scope='col'
                          className='px-4 py-3.5 text-left text-sm font-normal text-gray-500 dark:text-gray-400 rtl:text-right'
                        >
                          Type
                        </th>

                        <th
                          scope='col'
                          className='px-4 py-3.5 text-left text-sm font-normal text-gray-500 dark:text-gray-400 rtl:text-right'
                        >
                          Download
                        </th>
                      </tr>
                    </thead>
                    <tbody className='divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-900'>
                      {data.medias.map((d: any, i: any) => {
                        return (
                          <tr>
                            <td className='px-12 py-4 text-sm font-medium'>
                              {i + 1}
                            </td>
                            <td className='px-12 py-4 text-sm font-medium'>
                              {d.quality}
                            </td>
                            <td className='px-12 py-4 text-sm font-medium'>
                              {d.type}
                            </td>
                            <td>
                              <a
                                href={d.url}
                                target='_blank'
                                className='inline cursor-pointer gap-x-2 rounded-full bg-emerald-100/60 px-3 py-1 text-sm font-normal text-emerald-500 dark:bg-gray-800'
                              >
                                Download
                              </a>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        ''
      )}
    </section>
  );
};

export default TableComponent;
