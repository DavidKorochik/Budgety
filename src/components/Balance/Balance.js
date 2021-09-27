import React, { Fragment, useContext } from 'react';
import { TransactionsContext } from '../../store/transactions/TransactionsState';
import Charts from '../Charts/Charts';

export default function Balance() {
  const { transactions } = useContext(TransactionsContext);

  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  };

  const total = transactions.map((t) => Number(t.amount));

  const balance = total.reduce((acc, val) => (acc += val), 0);

  let totalExpanses = 0;
  let totalIncomes = 0;

  total.forEach((t) => {
    if (t < 0) {
      totalExpanses += t;
    } else {
      totalIncomes += t;
    }
  });

  return (
    <Fragment>
      <div className={`flex justify-end mt-10 mr-52 text-blue-500 text-4xl`}>
        <h4 className='mr-1 font-bold'>Your Balance</h4>
      </div>
      <div
        className={`${balance === 0 ? 'mr-52' : ''} ${
          balance > 0 && balance < 100 ? 'mr-44' : ''
        } ${balance > 99 && balance < 1000 ? 'mr-36' : ''} ${
          balance > 999 && balance < 10000 ? 'mr-32' : ''
        } ${balance > 9999 && balance < 100000 ? 'mr-28' : ''} ${
          balance > 99999 ? 'mr-24' : ''
        } flex justify-end mt-8  text-blue-500 text-7xl`}
      >
        <h1>
          {balance === 0
            ? balance.toFixed(2)
            : formatNumber(balance.toFixed(3))}
        </h1>
        <span className='ml-2'>&#8362;</span>
      </div>
      <div className='flex ml-10 absolute top-40'>
        <h3 className='text-4xl ml-10 font-bold text-white uppercase'>
          Income
        </h3>
        <h3 className='text-4xl ml-8 text-blue-500'>
          {totalIncomes === 0
            ? totalIncomes.toFixed(3)
            : formatNumber(totalIncomes.toFixed(3))}
          <span className='ml-2'>&#8362;</span>
        </h3>
        <div>
          <h3 className='text-4xl font-bold ml-20 text-white uppercase'>
            Expanse
          </h3>
        </div>
        <h3 className='text-4xl ml-8 text-blue-500'>
          {totalExpanses === 0
            ? totalExpanses.toFixed(3)
            : formatNumber(totalExpanses.toFixed(3))}
          <span className='ml-2'>&#8362;</span>
        </h3>
      </div>
      <Charts />
    </Fragment>
  );
}
