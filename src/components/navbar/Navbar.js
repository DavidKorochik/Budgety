import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <div className='sticky top-0'>
      <nav className='bg-gray-800'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-end h-16'>
            <Link
              to='/'
              className='text-2xl mr-96 text-blue-500 uppercase px-3 py-2 text-mid font-bold'
            >
              Budgety
            </Link>
            <div className='flex items-center'>
              <div className='flex-shrink-0'></div>
              <div className='hidden md:block'>
                <div className='links flex items-baseline space-x-2 '>
                  <Link
                    to='/income-expanses'
                    className='hovering text-white px-3 py-2 rounded-md text-mid font-medium ml-30'
                  >
                    Create an Expnase / Income
                  </Link>

                  <Link
                    to='/history'
                    className='hovering ml-20 text-white px-3 py-2 rounded-md text-mid font-medium'
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
                  <Link
                    to='/register'
                    className='hovering ml-10 text-white px-3 py-2 rounded-md text-mid font-medium'
                  >
                    Register
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
