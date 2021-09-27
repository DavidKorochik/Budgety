import React, { useContext, Fragment } from 'react';
import { TransactionsContext } from '../../store/transactions/TransactionsState';
import Transaction from '../Transaction/Transaction';

export default function History() {
  const { transactions } = useContext(TransactionsContext);

  return (
    <Fragment>
      {transactions.length === 0 ? (
        <Fragment>
          <div className='flex justify-center text-white text-4xl mt-6 mb-6'>
            History Of{' '}
            <span className='text-blue-500 font-bold ml-2'>Transactions</span>
          </div>
          <div className='flex justify-center text-blue-500 text-7xl text-4xl mt-44 mb-6'>
            No Transactions!
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <div className='flex justify-center text-white text-4xl mt-6 mb-6'>
            History Of{' '}
            <span className='text-blue-500 font-bold ml-2'>Transactions</span>
          </div>
          <section class='container mx-auto p-6 text-center bg-transparent'>
            <div class='w- mb-8 overflow-hidden text-center rounded-lg shadow-lg '>
              <div class='w-full text-center overflow-x-auto '>
                <table class=' overflow-hidden w-full text-center'>
                  <thead>
                    <tr class='text-md text-center font-semibold tracking-wide text-left text-gray-900 bg-transparent uppercase border-b border-gray-600'>
                      <th class='px-4 py-3 text-white text-2xl'>Date</th>
                      <th class='px-4 py-3 text-white text-2xl'>Description</th>
                      <th class='px-4 py-3 text-white text-2xl'>Amount</th>
                    </tr>
                  </thead>
                  {transactions.map((t) => (
                    <Transaction
                      id={t.id}
                      key={t.id}
                      description={t.description}
                      amount={t.amount}
                      date={t.date}
                    />
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
