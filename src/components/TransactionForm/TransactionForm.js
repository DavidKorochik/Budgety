import React, { useContext, useState, useEffect, Fragment } from 'react';
import { TransactionsContext } from '../../store/transactions/TransactionsState';
import { useHistory } from 'react-router';
import NumberFormat from 'react-number-format';
import Spinner from '../../utils/Spinner';
import './TransactionForm.css';

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

  console.log(window.innerHeight, window.innerWidth);

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
          <div className='laptop-mini'>
            <h1 className='title text-white font-bold text-6xl flex justify-center mt-20'>
              Add New <span className='text-blue-500 ml-3'>Transaction</span>
            </h1>
            <div className='w-auto flex justify-center laptop-form'>
              <form onSubmit={handleSubmit}>
                <div className='flex justify-center ml-20 flex-col'>
                  <div>
                    <span className='text-xl mr-16 mb-2 font-bold text-white block mt-10 mr-10'>
                      Date
                    </span>
                    <input
                      onChange={handleChange}
                      type='date'
                      className='inputForm text-xl placeholder-white w-52 text-centeroutline-none transition-all focus:border-blue-500 border-0 text-blue-500 bg-transparent border-b'
                      name='date'
                      required
                      value={date}
                      autoComplete='off'
                    />
                  </div>
                  <div className='mt-10'>
                    <div className='mr-1'>
                      <label
                        htmlFor='description'
                        className='text-xl mr-16 mb-2 font-bold text-white block mr-10'
                      >
                        Description
                      </label>
                    </div>
                    <input
                      onChange={handleChange}
                      className='inputForm text-xl placeholder-blue-500 w-52 text-centeroutline-none transition-all focus:border-blue-500 border-0 text-blue-500 bg-transparent border-b'
                      placeholder='Transaction description ...'
                      type='text'
                      name='description'
                      required
                      value={description}
                      autoComplete='off'
                    />
                  </div>
                  <div className='mt-10'>
                    <label
                      htmlFor='amount'
                      className='text-xl mr-16 mb-2 font-bold text-white block mr-10'
                    >
                      Amount
                    </label>
                    <NumberFormat
                      className='inputForm text-xl placeholder-blue-500 w-52 text-centeroutline-none transition-all focus:border-blue-500 border-0 text-blue-500 bg-transparent border-b'
                      placeholder='Transaction amount ...'
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
                </div>
                {current !== null ? (
                  <div className='flex justify-center align-center mr-10 laptop-clear'>
                    <button
                      className='switch text-white transition-all hover:rounded-xl hover:border-blue-500 border-b-2 w-20 h-12 mt-4 text-xl'
                      onClick={handleClear}
                    >
                      Clear
                    </button>
                  </div>
                ) : (
                  ''
                )}
                <div className='flex justify-center flex-col'>
                  <div
                    className={`ml-11 ${
                      current !== null ? 'mt-10' : 'mt-16'
                    } text-blue-500 text-xl`}
                  >
                    <h4 className='ml-3'>
                      <span className='font-extrabold text-2xl'>
                        For Expanse
                      </span>{' '}
                      - use the sign (-)
                    </h4>
                  </div>
                  <div className='mt-4 text-blue-500 text-xl'>
                    <h4 className='ml-14'>
                      <span className='font-extrabold text-2xl'>
                        For Income
                      </span>{' '}
                      - just write down the number
                    </h4>
                  </div>
                </div>
                <div className='latop-size flex justify-center align-center mt-2'>
                  <button
                    type='submit'
                    className={`mr-8 switch text-white transition-all hover:rounded-xl hover:border-blue-500 border-b-2 w-20 h-12 ${
                      current !== null ? 'mt-2' : 'mt-8'
                    } text-xl`}
                  >
                    {current !== null ? 'Update' : 'Submit'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
}
