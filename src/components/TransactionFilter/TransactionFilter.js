import React, { useState, useContext } from 'react';
import './TransactionFilter.css';
import { TransactionsContext } from '../../store/transactions/TransactionsState';

export default function TransactionFilter() {
  const { transactions, filteredTransactions } =
    useContext(TransactionsContext);

  const [search, setSearch] = useState('');

  return (
    <div className='flex justify-end'>
      {transactions.length !== 0 ? (
        <input
          onChange={(e) => {
            setSearch(e.target.value);
            filteredTransactions(e.target.value);
          }}
          value={search}
          autoComplete='off'
          type='text'
          placeholder='Search &#61442;'
          className='laptop-size search font-sans text-xl absolute bottom-3/4 placeholder-blue-500 mr-36 w-1/6 text-center outline-none transition-all focus:border-blue-500 border-0 text-blue-500 bg-transparent border-b  '
        />
      ) : (
        ''
      )}
    </div>
  );
}
