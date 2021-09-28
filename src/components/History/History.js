import React, { useContext, Fragment } from 'react';
import { TransactionsContext } from '../../store/transactions/TransactionsState';
import Transaction from '../Transaction/Transaction';
import TransactionFilter from '../TransactionFilter/TransactionFilter';

export default function History() {
  const { transactions, filter } = useContext(TransactionsContext);

  return (
    <Fragment>
      {transactions.length === 0 ? (
        <Fragment>
          <div className='flex justify-center text-white font-bold text-6xl mt-20 mb-6'>
            History Of{' '}
            <span className='text-blue-500 font-bold ml-2'>Transactions</span>
          </div>
          <div className='flex justify-center text-blue-500 font-bold text-7xl text-4xl mt-44 mb-6'>
            No Transactions!
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <div className='flex justify-center font-bold text-white text-6xl mt-20 mb-14'>
            History Of{' '}
            <span className='text-blue-500 font-bold ml-2'>Transactions</span>
          </div>
          <TransactionFilter />
          <section class='container mx-auto p-6 text-center bg-transparent'>
            <div class='w- mb-8 overflow-hidden text-center rounded-lg shadow-lg '>
              <div class='w-full text-center overflow-x-auto '>
                <table class='w-full text-center'>
                  <thead>
                    <tr class='text-md text-center font-semibold tracking-wide text-left text-gray-900 bg-transparent uppercase border-b-2 border-gray-600'>
                      <th class='px-4 py-3 text-white text-2xl'>Date</th>
                      <th class='px-4 py-3 text-white text-2xl'>Description</th>
                      <th class='px-4 py-3 text-white text-2xl'>Amount</th>
                    </tr>
                  </thead>
                  {filter !== null
                    ? filter.map((t) => (
                        <Transaction key={t.id} transaction={t} />
                      ))
                    : transactions.map((t) => (
                        <Transaction key={t.id} transaction={t} />
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
