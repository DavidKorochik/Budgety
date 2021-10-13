import React, { Fragment, useState, useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { TransactionsContext } from '../../store/transactions/TransactionsState';
import { AuthContext } from '../../store/auth/AuthState';

export default function Register() {
  const { setMessage } = useContext(TransactionsContext);
  const { registerUser, isAuthenticated, error } = useContext(AuthContext);

  const [user, setUser] = useState({
    fullName: '',
    email: '',
    password: '',
    password2: '',
  });

  const { fullName, email, password, password2 } = user;

  let history = useHistory();

  useEffect(() => {
    if (isAuthenticated) {
      history.push('/history');
    }
  }, [history, isAuthenticated]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== password2) {
      setMessage('Password do not match!', 'bg-red-700');
      window.location.reload();
    } else if (error !== null && error !== undefined) {
      setMessage(error, 'bg-red-700');
      window.location.reload();
    }

    await registerUser(user);
    history.push('/history');
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
                  'url(https://images.unsplash.com/photo-1585562125287-d748f3097a8f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80)',
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
                      className='ml-52 block mb-2 text-lg font-bold text-blue-500'
                      htmlFor='fullName'
                    >
                      Full Name
                    </label>
                    <input
                      className='ml-52 focus:ring-2 bg-transparent focus:border-transparent border-blue-500 focus:ring-blue-500 transition-all placeholder-gray-500 w-1/2 px-3 py-2 text-md leading-tight text-white border-b-2 appearance-none focus:outline-none focus:shadow-outline'
                      id='fullName'
                      type='text'
                      placeholder='Full Name'
                      required
                      autoComplete='off'
                      name='fullName'
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className='mb-2'>
                  <label
                    className='ml-52 block mb-2 text-lg font-bold text-blue-500'
                    htmlFor='email'
                  >
                    Email
                  </label>
                  <input
                    className='ml-52 focus:ring-2 bg-transparent focus:border-transparent border-blue-500 focus:ring-blue-500 transition-all placeholder-gray-500 w-1/2 px-3 py-2 mb-3 text-md leading-tight text-white border-b-2 appearance-none focus:outline-none focus:shadow-outline'
                    id='email'
                    type='email'
                    placeholder='Email'
                    required
                    autoComplete='off'
                    name='email'
                    onChange={handleChange}
                  />
                </div>
                <div className='mb-4 '>
                  <div className='mb-4 md:mb-0'>
                    <label
                      className='ml-52 block mb-2 text-lg font-bold text-blue-500'
                      htmlFor='password'
                    >
                      Password
                    </label>
                    <input
                      className='ml-52 focus:ring-2 focus:border-transparent border-blue-500 bg-transparent focus:ring-blue-500 transition-all placeholder-gray-500 w-1/2 px-3 py-2 mb-3 text-md leading-tight text-white border-b-2 appearance-none focus:outline-none focus:shadow-outline'
                      id='password'
                      type='password'
                      placeholder='******************'
                      required
                      autoComplete='off'
                      name='password'
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className='mb-8'>
                  <label
                    className='ml-52 block mb-2 text-lg font-bold text-blue-500'
                    htmlFor='password2'
                  >
                    Confirm Password
                  </label>
                  <input
                    className='ml-52 bg-transparent focus:border-transparent border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all placeholder-gray-500 w-1/2 px-3 py-2 mb-3 text-md leading-tight text-white border-b-2 appearance-none focus:outline-none focus:shadow-outline'
                    id='password2'
                    type='password'
                    placeholder='******************'
                    required
                    autoComplete='off'
                    name='password2'
                    onChange={handleChange}
                  />
                </div>
                <div className='mb-6 text-center'>
                  <button
                    className='ml-8 w-1/2 px-4 py-2 font-bold text-lg text-white bg-blue-500 rounded-full transition-all hover:bg-blue-700 focus:outline-none focus:shadow-outline'
                    type='submit'
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
