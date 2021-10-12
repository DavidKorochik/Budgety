import React, { useContext, useState, useEffect, Fragment } from 'react';
import { TransactionsContext } from '../../store/transactions/TransactionsState';
import './TransactionForm.css';
import { useHistory } from 'react-router';
import NumberFormat from 'react-number-format';
import Spinner from '../../utils/Spinner';

export default function TransactionForm() {
  const {
    addTransaction,
    setMessage,
    updateTransaction,
    current,
    clearCurrent,
  } = useContext(TransactionsContext);

  let history = useHistory();

  const [transaction, setTransaction] = useState({
    date: '',
    description: '',
    amount: '',
  });

  const [updateLoader, setUpdateLoader] = useState(null);

  const { date, description, amount } = transaction;

  const handleChange = (e) => {
    setTransaction({ ...transaction, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (current === null) {
      await addTransaction({
        ...transaction,
        amount: Number(amount),
      });

      setTransaction({ date: '', description: '', amount: '' });
      setMessage('Transaction added successfully', 'bg-green-700');
    } else {
      await updateTransaction({ ...transaction, amount: Number(amount) });
      setMessage('Updated transaction successfully', 'bg-green-700');

      setUpdateLoader(true);

      setTimeout(() => {
        setUpdateLoader(false);
      }, 3000);

      clearCurrent();
    }

    history.push('/history');
  };

  const handleClear = () => {
    clearCurrent();
  };

  useEffect(async () => {
    if (current !== null) {
      setTransaction(current);
    } else {
      setTransaction({ date: '', description: '', amount: '' });
    }

    // eslint-disable-next-line
  }, [current, TransactionsContext]);

  return (
    <Fragment>
      {updateLoader ? (
        <Spinner />
      ) : (
        <Fragment>
          <div>
            <h1 className='title text-white font-bold text-6xl flex justify-center mt-20'>
              Add New <span className='text-blue-500 ml-3'>Transaction</span>
            </h1>
            <form onSubmit={handleSubmit}>
              <div className='flex justify-center mt-20'>
                <label
                  htmlFor='date'
                  className='text-3xl font-medium text-white'
                >
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
                <NumberFormat
                  className='inputForm text-xl placeholder-blue-500 w-1/4 text-center ml-5 outline-none  transition-all focus:border-blue-500 border-0 text-blue-500 bg-transparent border-b '
                  placeholder='Add your transaction amount ...'
                  thousandSeparator={true}
                  value={amount}
                  autoComplete='off'
                  required
                  prefix={'₪'}
                  onValueChange={(e) =>
                    setTransaction({
                      ...transaction,
                      amount: Number(e.value),
                    })
                  }
                />
              </div>
              {current !== null ? (
                <div className='flex justify-center align-center'>
                  <button
                    className='change text-white transition-all hover:rounded-xl hover:border-blue-500 border-b-2 w-20 h-12 mt-4 text-xl'
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
                  <span className='font-extrabold text-2xl'>For Expanse</span> -
                  use the symbol (-)
                </h4>
              </div>
              <div className=' flex justify-center mt-4 text-blue-500 text-xl'>
                <h4>
                  <span className='font-extrabold text-2xl'>For Income</span> -
                  just write down the number
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
        </Fragment>
      )}
    </Fragment>
  );
}
