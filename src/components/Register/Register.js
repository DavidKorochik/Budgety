import React, { Fragment, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { TransactionsContext } from '../../store/transactions/TransactionsState';

export default function Register() {
  const { setMessage } = useContext(TransactionsContext);

  const [user, setUser] = useState({
    fullName: '',
    email: '',
    password1: '',
    password2: '',
  });

  const { fullName, email, password1, password2 } = user;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password1 !== password2) {
      setMessage('Password do not match!', 'bg-red-700');
    } else if (
      fullName === '' ||
      email === '' ||
      password1 === '' ||
      password2 === ''
    ) {
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
              <h3 className='pt-4 text-6xl font-bold pb-10 text-center text-blue-500'>
                Create An Account
              </h3>
              <form
                onSubmit={handleSubmit}
                className='px-8 pt-6 pb-8 mb-4 bg-transparent rounded'
              >
                <div className='mb-4'>
                  <div className='mb-4 md:mb-0'>
                    <label
                      className='block mb-2 text-lg font-bold text-blue-500'
                      htmlFor='firstName'
                    >
                      Full Name
                    </label>
                    <input
                      className='focus:ring-4 focus:ring-blue-500 transition-all placeholder-gray-500 w-full px-3 py-2 text-md leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                      id='firstName'
                      type='text'
                      placeholder='Full Name'
                      required
                      autoComplete='off'
                      name='fullName'
                      onChange={handleChange}
                    />
                  </div>
                </div>
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
                    placeholder='Email'
                    required
                    autoComplete='off'
                    name='email'
                    onChange={handleChange}
                  />
                </div>
                <div className='mb-4 md:flex md:justify-between'>
                  <div className='mb-4 md:mb-0'>
                    <label
                      className='block mb-2 text-lg font-bold text-blue-500'
                      htmlFor='password1'
                    >
                      Password
                    </label>
                    <input
                      className='focus:ring-4 focus:ring-blue-500 transition-all placeholder-gray-500 w-96 px-3 py-2 mb-3 text-md  leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                      id='password1'
                      type='password'
                      placeholder='******************'
                      required
                      autoComplete='off'
                      name='password1'
                      onChange={handleChange}
                    />
                  </div>
                  <div className='md:ml-2'>
                    <label
                      className='block mb-2 text-lg font-bold text-blue-500'
                      htmlFor='password2'
                    >
                      Confirm Password
                    </label>
                    <input
                      className='focus:ring-4 focus:ring-blue-500 transition-all placeholder-gray-500 w-96 px-3 py-2 mb-3 text-md  leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                      id='password2'
                      type='password'
                      placeholder='******************'
                      required
                      autoComplete='off'
                      name='password2'
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className='mb-6 text-center'>
                  <button
                    onClick={handleSubmit}
                    className='w-full px-4 py-2 font-bold text-lg text-white bg-blue-500 rounded-full transition-all hover:bg-blue-700 focus:outline-none focus:shadow-outline'
                    type='button'
                  >
                    Register Account
                  </button>
                </div>
                <hr className='mb-6 border-t' />
                <div className='text-center'>
                  <Link
                    className='inline-block text-md  transition-all text-blue-500 align-baseline hover:text-blue-800'
                    to='/login'
                  >
                    Already have an account? Login!
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
