import React, { Fragment, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { TransactionsContext } from '../../store/transactions/TransactionsState';

export default function Register() {
  const { setMessage, message } = useContext(TransactionsContext);

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { email, password } = user;

  const handleChange = (e) => {
    return setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      setMessage('Please enter all fields', 'bg-red-700');
    }
  };

  return (
    <Fragment>
      <div className='mt-24'>
        <div className='flex justify-center px-6 my-12'>
          <div className='w-full xl:w-3/4 lg:w-11/12 flex'>
            <div
              className='w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg'
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1585562125287-d748f3097a8f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80')",
              }}
            ></div>
            <div className='lg:w-full bg-transparent p-5 rounded-lg lg:rounded-l-none'>
              <h3 className='pt-8 text-6xl font-bold pb-10 text-center text-blue-500'>
                Login To Your Account
              </h3>
              <form
                onSubmit={handleSubmit}
                className='px-8 pt-6 pb-8 mb-4 bg-transparent rounded'
              >
                <div className='mb-4'>
                  <label
                    className='block mb-2 text-lg font-bold text-blue-500'
                    htmlFor='email'
                  >
                    Email
                  </label>
                  <input
                    className='focus:ring-4 focus:ring-blue-500 transition-all placeholder-gray-500 w-full px-3 py-2 mb-3 text-md  leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                    id='email'
                    type='email'
                    name='email'
                    placeholder='Email'
                    autoComplete='off'
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className='mb-4'>
                  <label
                    className='block mb-2 text-lg font-bold text-blue-500'
                    htmlFor='password'
                  >
                    Password
                  </label>
                  <input
                    className='focus:ring-4 focus:ring-blue-500 transition-all placeholder-gray-500 w-full px-3 py-2 mb-3 text-md  leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                    id='password'
                    type='password'
                    name='password'
                    placeholder='******************'
                    autoComplete='off'
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className='mb-6 text-center'>
                  <button
                    onClick={handleSubmit}
                    className='w-full px-4 py-2 font-bold text-white text-lg bg-blue-500 mt-16 rounded-full transition-all hover:bg-blue-700 focus:outline-none focus:shadow-outline'
                    type='button'
                  >
                    Login Account
                  </button>
                </div>
                <hr className='mb-6 border-t' />
                <div className='text-center'>
                  <Link
                    className='inline-block text-md transition-all text-blue-500 align-baseline hover:text-blue-800'
                    to='/register'
                  >
                    Don't have an account? Register!
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
