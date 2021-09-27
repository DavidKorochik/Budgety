import React, { Fragment, useContext } from 'react';
import { TransactionsContext } from '../../store/transactions/TransactionsState';

export default function Balance() {
  const { transactions } = useContext(TransactionsContext);

  const nf = new Intl.NumberFormat();

  const formatNumber = (num) => {
    let p = num.toString().split('.');
    if (p[0] > 999) {
      return nf.format(num);
    } else {
      return num;
    }
  };

  const total = transactions.map((t) => Number(t.amount));

  const balance = total.reduce((acc, val) => (acc += val), 0);

  return (
    <Fragment>
      <div className='flex justify-center mt-10 text-blue-500 text-4xl'>
        <h4 className='mr-2 font-bold'>Your Balance</h4>
      </div>
      <div className='flex justify-center mt-8 text-blue-500 text-7xl'>
        <h1>
          {balance === 0 || balance.toString().split('.')[1] === undefined
            ? balance.toFixed(2)
            : formatNumber(balance)}
        </h1>
      </div>
    </Fragment>
  );
}
