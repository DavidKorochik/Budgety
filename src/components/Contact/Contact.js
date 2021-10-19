import React, { Fragment, useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../store/auth/AuthState';
import { TransactionsContext } from '../../store/transactions/TransactionsState';
import { motion } from 'framer-motion';
import { popup } from '../../utils/animations';
import Spinner from '../../utils/Spinner';

export default function Contact() {
  const { user } = useContext(AuthContext);
  const { setMessage } = useContext(TransactionsContext);

  const [message, setMessageClient] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(!isVisible);
    }, 1000);
  }, []);

  const handleSend = (e) => {
    e.preventDefault();

    const rootElement = document.documentElement;
    rootElement.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    setMessageClient('');
    setFirstName('');
    setLastName('');
    setEmail('');

    setMessage('Message was sent, Thank You!', 'bg-green-700');
  };

  return (
    <Fragment>
      {!isVisible ? (
        <Spinner />
      ) : (
        <Fragment>
          <motion.div
            variants={popup}
            initial='hidden'
            animate={isVisible ? 'show' : ''}
            className='text-white font-bold text-6xl flex justify-center mt-20 mb-14'
          >
            <h1>
              Contact <span className='text-blue-500 font-bold'>Us</span>
            </h1>
          </motion.div>
          <motion.div
            variants={popup}
            initial='hidden'
            animate={isVisible ? 'show' : ''}
            className='flex justify-center'
          >
            <form className='w-full max-w-lg' onSubmit={handleSend}>
              {user === null ? (
                <div>
                  <div className='flex flex-wrap -mx-3 mb-6'>
                    <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                      <label
                        className='block uppercase tracking-wide text-white text-medium font-bold mb-2'
                        for='grid-first-name'
                      >
                        First Name
                      </label>
                      <input
                        onChange={(e) => setFirstName(e.target.value)}
                        className='transition-all focus:ring-2 placeholder-blue-500 focus:border-transparent appearance-none block w-full bg-transparent text-blue-500 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none'
                        id='grid-first-name'
                        type='text'
                        placeholder='First Name'
                        autoComplete='off'
                        value={firstName}
                      />
                    </div>
                    <div className='w-full md:w-1/2 px-3'>
                      <label
                        className='block uppercase tracking-wide text-white text-medium font-bold mb-2'
                        for='grid-last-name'
                      >
                        Last Name
                      </label>
                      <input
                        onChange={(e) => setLastName(e.target.value)}
                        className='transition-all placeholder-blue-500 appearance-none focus:ring-2 focus:border-transparent block w-full bg-transparent text-blue-500 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none '
                        id='grid-last-name'
                        type='text'
                        placeholder='Last Name'
                        autoComplete='off'
                        value={lastName}
                      />
                    </div>
                  </div>
                  <div className='flex flex-wrap -mx-3 mb-6'>
                    <div className='w-full px-3'>
                      <label
                        className='block uppercase tracking-wide text-white text-medium font-bold mb-2'
                        for='grid-password'
                      >
                        E-mail
                      </label>
                      <input
                        onChange={(e) => setEmail(e.target.value)}
                        className='transition-all appearance-none focus:ring-2 focus:border-transparent block w-full bg-transparent text-blue-500 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none '
                        id='email'
                        type='email'
                        autoComplete='off'
                        value={email}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <div className='flex flex-wrap -mx-3 mb-6'>
                    <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                      <label
                        className='block uppercase tracking-wide text-white text-medium font-bold mb-2'
                        for='grid-first-name'
                      >
                        First Name
                      </label>
                      <input
                        className='transition-all focus:ring-2 placeholder-blue-500 focus:border-transparent appearance-none block w-full bg-transparent text-blue-500 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none'
                        id='grid-first-name'
                        type='text'
                        placeholder='First Name'
                        autoComplete='off'
                        value={user.fullName.split(' ')[0]}
                      />
                    </div>
                    <div className='w-full md:w-1/2 px-3'>
                      <label
                        className='block uppercase tracking-wide text-white text-medium font-bold mb-2'
                        for='grid-last-name'
                      >
                        Last Name
                      </label>
                      <input
                        className='transition-all placeholder-blue-500 appearance-none focus:ring-2 focus:border-transparent block w-full bg-transparent text-blue-500 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none '
                        id='grid-last-name'
                        type='text'
                        placeholder='Last Name'
                        autoComplete='off'
                        value={user.fullName.split(' ')[1]}
                      />
                    </div>
                  </div>
                  <div className='flex flex-wrap -mx-3 mb-6'>
                    <div className='w-full px-3'>
                      <label
                        className='block uppercase tracking-wide text-white text-medium font-bold mb-2'
                        for='grid-password'
                      >
                        E-mail
                      </label>
                      <input
                        className='transition-all appearance-none focus:ring-2 focus:border-transparent block w-full bg-transparent text-blue-500 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none '
                        id='email'
                        type='email'
                        autoComplete='off'
                        value={user.email}
                      />
                    </div>
                  </div>
                </div>
              )}
              <div className='flex flex-wrap -mx-3 mb-6'>
                <div className='w-full px-3'>
                  <label
                    className='block uppercase tracking-wide text-white text-medium font-bold mb-2'
                    for='grid-password'
                  >
                    Message
                  </label>
                  <textarea
                    onChange={(e) => setMessageClient(e.target.value)}
                    className='transition-all no-resize focus:ring-2 focus:border-transparent appearance-none block w-full bg-transparent text-blue-500 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none h-48 resize-none'
                    id='message'
                    value={message}
                  ></textarea>
                </div>
              </div>
              <div className='md:flex md:items-center'>
                <div className='md:w-1/3'>
                  <button
                    className='transition-all border-white mb-10 border-2 hover:border-blue-500 hover:transition-all hover:text-blue-500 focus:outline-none text-white font-bold py-2 px-4 rounded'
                    type='submit'
                  >
                    Send
                  </button>
                </div>
                <div className='md:w-2/3'></div>
              </div>
            </form>
          </motion.div>
        </Fragment>
      )}
    </Fragment>
  );
}
