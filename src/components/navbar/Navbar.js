import React, { Fragment, useContext, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../store/auth/AuthState';
import './Navbar.css';

export default function Navbar() {
  const { isAuthenticated, user, logoutUser, loadUser } =
    useContext(AuthContext);

  const location = useLocation();

  useEffect(async () => {
    if (localStorage.getItem('token')) {
      await loadUser();
    }
  }, []);

  const authLinks = (
    <div className='sticky top-0'>
      <nav className='bg-gray-800'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-end h-16'>
            <Link
              to='/'
              className='text-2xl mr-auto text-blue-500 uppercase px-3 py-2 text-mid font-bold'
            >
              Budgety
            </Link>
            <div className='flex items-center'>
              <div className='flex-shrink-0'></div>
              <div className='hidden md:block'>
                <div className='links flex items-baseline space-x-2 '>
                  <Link
                    to='/about'
                    className={`${
                      location.pathname === '/about' ? 'text-blue-500' : ''
                    } hovering	ml-10 text-white px-3 py-2 rounded-md text-mid font-medium`}
                  >
                    About Us
                  </Link>

                  <Link
                    to='/contact'
                    className={`${
                      location.pathname === '/contact' ? 'text-blue-500' : ''
                    } hovering ml-10 text-white px-3 py-2 rounded-md text-mid font-medium`}
                  >
                    Contact Us
                  </Link>
                  <Link
                    to='/login'
                    className={`${
                      location.pathname === '/login' ? 'text-blue-500' : ''
                    } hovering ml-10 text-white px-3 py-2 rounded-md text-mid font-medium`}
                  >
                    Log In
                  </Link>
                  <Link
                    to='/register'
                    className={`${
                      location.pathname === '/register' ? 'text-blue-500' : ''
                    } hovering ml-10 text-white px-3 py-2 rounded-md text-mid font-medium`}
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

  const userLinks = (
    <div className='sticky top-0'>
      <nav className='bg-gray-800'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-end h-16'>
            <Link
              to='/'
              className='text-2xl mr-auto text-blue-500 uppercase px-3 py-2 text-mid font-bold'
            >
              Budgety
            </Link>
            <div className='flex items-center'>
              <div className='flex-shrink-0'></div>
              <div className='hidden md:block'>
                <div className='links flex items-baseline space-x-2 '>
                  <Link
                    to='/create'
                    className={`${
                      location.pathname === '/create' ? 'text-blue-500' : ''
                    } hovering text-white px-3 py-2 rounded-md text-mid font-medium ml-30`}
                  >
                    Create an Expnase / Income
                  </Link>

                  <Link
                    to='/history'
                    className={`${
                      location.pathname === '/history' ? 'text-blue-500' : ''
                    } hovering ml-20 text-white px-3 py-2 rounded-md text-mid font-medium`}
                  >
                    History
                  </Link>

                  <Link
                    to='/reports'
                    className={`${
                      location.pathname === '/reports' ? 'text-blue-500' : ''
                    } hovering ml-10 text-white px-3 py-2 rounded-md text-mid font-medium`}
                  >
                    Reports
                  </Link>

                  <Link
                    to='/about'
                    className={`${
                      location.pathname === '/about' ? 'text-blue-500' : ''
                    } hovering	ml-10 text-white px-3 py-2 rounded-md text-mid font-medium`}
                  >
                    About Us
                  </Link>

                  <Link
                    to='/contact'
                    className={`${
                      location.pathname === '/contact' ? 'text-blue-500' : ''
                    } hovering ml-10 text-white px-3 py-2 rounded-md text-mid font-medium`}
                  >
                    Contact Us
                  </Link>

                  <Link
                    to='/login'
                    onClick={async () => await logoutUser()}
                    className='
                       hovering ml-10 text-white px-3 py-2 rounded-md text-mid font-medium'
                  >
                    Logout
                  </Link>

                  {user !== null ? (
                    <span className='text-white px-3 py-2 rounded-md text-mid font-medium text-blue-500'>
                      Hello{' '}
                      <span className='text-blue-500 font-bold ml-2 text-xl'>
                        {user.fullName}
                      </span>
                    </span>
                  ) : (
                    ''
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );

  return (
    <Fragment>
      {isAuthenticated || localStorage.getItem('token') ? userLinks : authLinks}
    </Fragment>
  );
}
