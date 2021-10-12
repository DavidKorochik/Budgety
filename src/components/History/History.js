import React, { useContext, Fragment, useEffect } from 'react';
import { TransactionsContext } from '../../store/transactions/TransactionsState';
import Transaction from '../Transaction/Transaction';
import TransactionFilter from '../TransactionFilter/TransactionFilter';
import Spinner from '../../utils/Spinner';
import './History.css';

export default function History() {
  const { transactions, filter, getAllTransactions, loading } =
    useContext(TransactionsContext);

  useEffect(async () => {
    setTimeout(async () => {
      await getAllTransactions();
    }, 1000);
  }, []);

  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  };

  const total = transactions.map((t) => Number(t.amount));

  const balance = total.reduce((acc, val) => (acc += val), 0);

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <div className='flex justify-center font-bold text-white text-6xl mt-20 mb-14'>
            History Of{' '}
            <span className='text-blue-500 font-bold ml-4'>Transactions</span>
          </div>
          <TransactionFilter />
          <section className='container mx-auto p-6 text-center bg-transparent'>
            <div className='w- mb-8 overflow-hidden text-center rounded-lg shadow-lg '>
              <div className='w-full text-center overflow-x-auto '>
                <table className='w-full text-center'>
                  <thead>
                    <tr className='text-md text-center font-semibold tracking-wide text-left text-gray-900 bg-transparent uppercase border-b-2 border-gray-600'>
                      <th className='px-4 py-3 text-white text-2xl'>Date</th>
                      <th className='px-4 py-3 text-white text-2xl'>
                        Description
                      </th>
                      <th className='px-4 py-3 text-white text-2xl'>Amount</th>
                    </tr>
                  </thead>
                  {filter !== null
                    ? filter.map((t) => (
                        <Transaction key={t._id} transaction={t} />
                      ))
                    : transactions.map((t) => (
                        <Transaction key={t._id} transaction={t} />
                      ))}
                </table>
              </div>
            </div>
          </section>
        </Fragment>
      )}
    </Fragment>
  );
}