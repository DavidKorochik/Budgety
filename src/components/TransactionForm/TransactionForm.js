import React, { useContext, useState, useEffect } from 'react';
import { TransactionsContext } from '../../store/transactions/TransactionsState';
import './TransactionForm.css';
import { v4 as uuidv4 } from 'uuid';
import { useHistory } from 'react-router';

export default function TransactionForm() {
  const {
    setMessage,
    addTransaction,
    message,
    updateTransaction,
    current,
    clearCurrent,
  } = useContext(TransactionsContext);

  let history = useHistory();

  // const [description, setDescription] = useState('');
  // const [amount, setAmount] = useState('');
  // const [date, setDate] = useState('');

  const [transaction, setTransaction] = useState({
    date: '',
    description: '',
    amount: '',
  });

  const { date, description, amount } = transaction;

  const handleChange = (e) => {
    setTransaction({ ...transaction, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const letters = /^[A-Za-z]+$/;

    if (!amount.toString().match(letters) && typeof amount !== NaN) {
      if (current === null) {
        addTransaction({
          ...transaction,
          id: uuidv4(),
          amount: Number(amount),
        });
        setTransaction({ date: '', description: '', amount: '' });
      } else {
        updateTransaction({ ...transaction, amount: Number(amount) });
      }
    } else {
      return;
    }

    clearCurrent();

    history.push('/history');

    // setMessage({
    //   id: uuidv4(),
    //   message: 'You have submitted a new transaction!',
    // });
  };

  const handleClear = () => {
    clearCurrent();
  };

  useEffect(() => {
    if (current !== null) {
      setTransaction(current);
    } else {
      setTransaction({ date: '', description: '', amount: '' });
    }
  }, [current, TransactionsContext]);

  return (
    <>
      <div>
        {message.length !== 0 && current === null ? (
          <h1 className='title text-blue-500 font-bold text-6xl flex justify-center mt-20'>
            You Have Added A New Transaction!
          </h1>
        ) : (
          <h1 className='title text-white font-bold text-6xl flex justify-center mt-20'>
            Add New <span className='text-blue-500 ml-3'>Transaction</span>
          </h1>
        )}

        <form onSubmit={handleSubmit}>
          <div className='flex justify-center mt-20'>
            <label htmlFor='date' className='text-3xl font-medium text-white'>
              Date
            </label>
            <input
              onChange={handleChange}
              className='inputForm text-xl placeholder-white w-1/4 text-center ml-5 outline-none transition-all focus:border-blue-500 border-0 text-blue-500 bg-transparent border-b '
              placeholder='Add the date of the transaction ...'
              type='date'
              name='date'
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
              onChange={handleChange}
              className='inputForm text-xl placeholder-blue-500 w-1/4 ml-5 text-blue-500 outline-none border-0 transition-all focus:border-blue-500 bg-transparent border-b text-center '
              placeholder='Add your transaction description ...'
              type='text'
              name='description'
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
            <input
              className='inputForm text-xl placeholder-blue-500 w-1/4 text-center ml-5 outline-none  transition-all focus:border-blue-500 border-0 text-blue-500 bg-transparent border-b '
              placeholder='Add your transaction amount ...'
              type='text'
              name='amount'
              required
              value={amount}
              id='formattedInput'
              onChange={handleChange}
              autoComplete='off'
            />
          </div>
          {current !== null ? (
            <div className='flex justify-center align-center'>
              <button
                className="'change text-white transition-all hover:rounded-xl hover:border-blue-500 border-b-2 w-20 h-12 mt-4 text-xl"
                onClick={handleClear}
              >
                Clear
              </button>
            </div>
          ) : (
            ''
          )}
          <div
            className={`flex justify-center ${
              current !== null ? 'mt-10' : 'mt-16'
            } text-blue-500 text-xl`}
          >
            <h4>
              <span className='font-extrabold text-2xl'>For Expanse</span> - use
              the symbol (-)
            </h4>
          </div>
          <div className=' flex justify-center mt-4 text-blue-500 text-xl'>
            <h4>
              <span className='font-extrabold text-2xl'>For Income</span> - just
              write down the number
            </h4>
          </div>
          <div className='flex justify-center align-center mt-8'>
            <button
              type='submit'
              className={`change text-white transition-all hover:rounded-xl hover:border-blue-500 border-b-2 w-20 h-12 ${
                current !== null ? 'mt-2' : 'mt-8'
              } text-xl`}
            >
              {current !== null ? 'Update' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
