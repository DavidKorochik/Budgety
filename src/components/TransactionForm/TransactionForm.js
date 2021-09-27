import React, { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TransactionsContext } from '../../store/transactions/TransactionsState';
import './TransactionForm.css';
import NumberFormat from 'react-number-format';

export default function TransactionForm() {
  const { setMessage, addTransaction, message } =
    useContext(TransactionsContext);

  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

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
        <h1 className='title text-white font-bold text-6xl flex justify-center mt-20'>
          Add New <span className='text-blue-500 ml-3'>Transaction</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div className='flex justify-center mt-20'>
            <label htmlFor='date' className='text-3xl font-medium text-white'>
              Date
            </label>
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
            <label
              htmlFor='description'
              className='text-3xl font-medium ml-20 text-white'
            >
              Description
            </label>
            <input
              onChange={(e) => setDescription(e.target.value)}
              className='inputForm text-xl placeholder-white w-1/4 ml-5 text-white outline-none border-0 transition-all focus:border-blue-500 bg-transparent border-b text-center '
              placeholder='Add your transaction description ...'
              type='text'
              required
              value={description}
              autoComplete='off'
            />
          </div>
          <div className='flex justify-center mt-10'>
            <label
              htmlFor='amount'
              className='text-3xl font-medium ml-10 text-white'
            >
              Amount
            </label>
            <NumberFormat
              className='inputForm text-xl placeholder-white w-1/4 text-center ml-5 outline-none  transition-all focus:border-blue-500 border-0 text-white bg-transparent border-b '
              placeholder='Add your transaction amount ...'
              type='text'
              required
              value={amount}
              autoComplete='off'
              id='formattedNumberField'
              thousandSeparator={true}
              onChange={(e) => setAmount(e.target.value)}
              prefix={'₪'}
            />
          </div>
          <div className='flex justify-center mt-16 text-blue-500 text-xl'>
            <h4>
              <span className='font-extrabold text-2xl'>For Expanse</span> - use
              the symbol (-)
            </h4>
          </div>
          <div className='flex justify-center mt-4 text-blue-500 text-xl'>
            <h4>
              <span className='font-extrabold text-2xl'>For Income</span> - just
              write down the number
            </h4>
          </div>
          <div className='flex justify-center align-center mt-8'>
            <button
              type='submit'
              className='text-white transition-all hover:rounded-xl hover:border-blue-500 border-b-2 w-20 h-12  mt-8 text-xl'
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
