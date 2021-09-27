import React, { useState, useContext } from 'react';
import { TransactionsContext } from '../../store/transactions/TransactionsState';
import './TransactionForm.css';
import { v4 as uuidv4 } from 'uuid';

export default function TransactionForm() {
  const { setMessage, addTransaction, message } =
    useContext(TransactionsContext);

  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [checked, setChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const letters = /^[A-Za-z]+$/;

    if (!amount.match(letters) && amount !== NaN) {
      addTransaction({
        id: uuidv4(),
        date,
        description,
        amount: Number(amount),
      });
    } else {
      setAmount('');
    }

    setDescription('');
    setAmount('');
    setDate('');

    setMessage({ message: 'You have submitted a new transaction!' });
  };

  return (
    <>
      <div>
        {/* {message.map((m) => (
          <p className='text-2xl text-white'>{m.message}</p>
        ))} */}
        <h1 className='title text-white font-bold text-6xl flex justify-center mt-20'>
          Add New <span className='text-blue-500 ml-3'>Transaction</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div className='flex justify-center mt-28'>
            <span className='text-3xl font-medium text-white'>Date:</span>
            <input
              onChange={(e) => setDate(e.target.value)}
              className='inputForm text-xl placeholder-white w-1/4 text-center ml-5 outline-none transition-all focus:border-blue-500 border-0 text-white bg-transparent border-b '
              placeholder='Add the date of the transaction ...'
              type='date'
              required
              value={date}
              autoComplete='off'
            />
          </div>
          <div className='flex justify-center mt-10'>
            <span className='text-3xl font-medium text-white'>
              Description:
            </span>
            <input
              onChange={(e) => setDescription(e.target.value)}
              className='inputForm text-xl placeholder-white w-1/3 ml-5 text-white outline-none border-0 transition-all focus:border-blue-500 bg-transparent border-b text-center '
              placeholder='Add your transaction description ...'
              type='text'
              required
              value={description}
              autoComplete='off'
            />
          </div>
          <div className='flex justify-center mt-10'>
            <span className='text-3xl font-medium text-white'>Amount:</span>
            <input
              onChange={(e) => setAmount(e.target.value)}
              className='inputForm text-xl placeholder-white w-1/4 text-center ml-5 outline-none  transition-all focus:border-blue-500 border-0 text-white bg-transparent border-b '
              placeholder='Add your transaction amount ...'
              type='text'
              required
              value={amount}
              autoComplete='off'
            />
          </div>
          <div className='flex items-center justify-center w-full mb-8 mt-12'>
            <div className='mr-2'>
              <span
                className={` ${
                  !checked
                    ? 'font-bold text-2xl transition-all text-blue-500 mr-2'
                    : 'text-xl transition-all text-white mr-2'
                }`}
              >
                Expanse
              </span>
            </div>
            <label className='flex items-center cursor-pointer'>
              <div className='relative'>
                <input
                  onChange={() => setChecked(!checked)}
                  type='checkbox'
                  className='sr-only checked:bg-white checked:transform'
                />
                <div className='block bg-blue-500 w-14 h-8 rounded-full'></div>
                <div className='dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition'></div>
              </div>
            </label>
            <div className='ml-2'>
              <span
                className={`${
                  checked
                    ? 'font-bold text-2xl transition-al text-blue-500 ml-2'
                    : 'transition-all text-xl text-white ml-2'
                } `}
              >
                Income
              </span>
            </div>
          </div>
          <div className='flex justify-center align-center'>
            <button
              type='submit'
              className='text-white transition-all hover:rounded-xl hover:border-blue-500 border-b-2 w-20 h-12'
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
