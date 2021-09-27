import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='sticky top-0'>
      <nav className='bg-gray-800'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-end h-16'>
            <Link
              to='/about'
              className='text-2xl mr-96 text-blue-500 uppercase px-3 py-2 text-mid font-bold'
            >
              Budgety
            </Link>
            <div className='flex items-center'>
              <div className='flex-shrink-0'></div>
              <div className='hidden md:block'>
                <div className='links flex items-baseline space-x-4'>
                  <Link
                    to='/income-expanses'
                    className='hovering text-white px-3 py-2 rounded-md text-mid font-medium ml-10'
                  >
                    Create an Expnase / Income
                  </Link>
                  <Link
                    to='/history'
                    className='hovering ml-10 text-white px-3 py-2 rounded-md text-mid font-medium'
                  >
                    History
                  </Link>

                  <Link
                    to='/reports'
                    className='hovering	ml-10 text-white px-3 py-2 rounded-md text-mid font-medium'
                  >
                    Reports
                  </Link>

                  <Link
                    to='/about'
                    className='hovering	ml-10 text-white px-3 py-2 rounded-md text-mid font-medium'
                  >
                    About Us
                  </Link>

                  <Link
                    to='/contact'
                    className='hovering	ml-10 text-white px-3 py-2 rounded-md text-mid font-medium'
                  >
                    Contact Us
                  </Link>
                  <Link
                    to='/login'
                    className='hovering ml-10 text-white px-3 py-2 rounded-md text-mid font-medium'
                  >
                    Log In
                  </Link>
                </div>
              </div>
            </div>
            <div className='-mr-2 flex md:hidden'>
              <button
                onClick={() => setIsOpen(!isOpen)}
                type='button'
                className='bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
                aria-controls='mobile-menu'
                aria-expanded='false'
              >
                <span className='sr-only'>Open main menu</span>
                {!isOpen ? (
                  <svg
                    className='block h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M4 6h16M4 12h16M4 18h16'
                    />
                  </svg>
                ) : (
                  <svg
                    className='block h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter='transition ease-out duration-100 transform'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='transition ease-in duration-75 transform'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
        >
          {(ref) => (
            <div className='md:hidden' id='mobile-menu'>
              <div ref={ref} className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                <a
                  href='#'
                  className='hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium'
                >
                  Dashboard
                </a>

                <a
                  href='#'
                  className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                >
                  Team
                </a>

                <a
                  href='#'
                  className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                >
                  Projects
                </a>

                <a
                  href='#'
                  className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                >
                  Calendar
                </a>

                <a
                  href='#'
                  className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                >
                  Reports
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}
