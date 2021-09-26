import React, { useState } from 'react';

export default function TransactionForm() {
  const [desc, setDesc] = useState(null);
  const [amount, setAmount] = useState(null);
  const [descInpput, setDescInput] = useState(null);
  const [amountInput, setAmountInput] = useState(null);

  const handleSubmit = (e) => {
    e.preventDeafult();
    setDescInput('');
    setAmountInput('');
  };

  return (
    <>
      <div>
        <h1 className='text-white font-bold text-4xl flex justify-center mt-10'>
          Add Transaction
        </h1>
        <form onSubmit={() => handleSubmit()}>
          <div className='flex justify-center mt-24'>
            <span className='text-xl font-medium text-white'>Description:</span>
            <input
              onChange={(e) => setDesc(e.target.value)}
              className='placeholder-white w-1/4 ml-3 text-white outline-none border-0 focus:ring-1 transition-all focus:ring-white bg-transparent border-b-2 text-center rounded-xl'
              placeholder='Add your transaction description ...'
              type='text'
            />
          </div>
          <div className='flex justify-center mt-8'>
            <span className='text-xl font-medium text-white'>Amount:</span>
            <input
              onChange={(e) => setAmount(Number(e.target.value))}
              className='placeholder-white w-80 text-center ml-3 outline-none focus:ring-1 transition-all focus:ring-white border-0 text-white bg-transparent border-b-2 rounded-xl'
              placeholder='Add your transaction amount ...'
              type='text'
            />
          </div>
          <div className='flex justify-center align-center'>
            <button
              type='submit'
              className='text-white mt-16 transition-all hover:rounded-xl hover:border-gray-700 border-b-2 w-20 h-12'
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
