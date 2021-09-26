import React, { useState } from 'react';
import './TransactionForm.css';

export default function TransactionForm() {
  const [desc, setDesc] = useState(null);
  const [amount, setAmount] = useState(null);
  const [descInpput, setDescInput] = useState(null);
  const [amountInput, setAmountInput] = useState(null);
  const [checked, setChecked] = useState(true);

  const handleSubmit = (e) => {
    e.preventDeafult();
    setDescInput('');
    setAmountInput('');
  };

  return (
    <>
      <div>
        <h1 className='text-white font-bold text-6xl flex justify-center mt-10'>
          Add Transaction
        </h1>
        <form onSubmit={() => handleSubmit()}>
          <div className='flex justify-center mt-24'>
            <span className='text-3xl font-medium text-white'>
              Description:
            </span>
            <input
              onChange={(e) => setDesc(e.target.value)}
              className='text-xl placeholder-white w-1/3 ml-5 text-white outline-none border-0 focus:ring-1 transition-all focus:ring-white bg-transparent border-b-2 text-center rounded-xl'
              placeholder='Add your transaction description ...'
              type='text'
            />
          </div>
          <div className='flex justify-center mt-8'>
            <span className='text-3xl font-medium text-white'>Amount:</span>
            <input
              onChange={(e) => setAmount(Number(e.target.value))}
              className='text-xl placeholder-white w-1/4 text-center ml-5 outline-none focus:ring-1 transition-all focus:ring-white border-0 text-white bg-transparent border-b-2 rounded-xl'
              placeholder='Add your transaction amount ...'
              type='text'
            />
          </div>
          <div className='flex items-center justify-center w-full mb-8 mt-12'>
            <label className='flex items-center cursor-pointer'>
              <div className='relative'>
                <input
                  onChange={() => setChecked(!checked)}
                  type='checkbox'
                  className='sr-only checked:bg-blue-600 checked:transform'
                />
                <div className='block bg-gray-600 w-14 h-8 rounded-full'></div>
                <div className='dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition'></div>
              </div>
            </label>
          </div>
          <div className='flex justify-center align-center'>
            <button
              type='submit'
              className='text-white transition-all hover:rounded-xl hover:border-gray-700 border-b-2 w-20 h-12'
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
