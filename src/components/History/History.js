import React, { useContext, useState, Fragment, useEffect } from 'react';
import { TransactionsContext } from '../../store/transactions/TransactionsState';
import Transaction from '../Transaction/Transaction';
import TransactionFilter from '../TransactionFilter/TransactionFilter';
import Spinner from '../../utils/Spinner';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import { motion } from 'framer-motion';
import { popup } from '../../utils/animations';
import './History.css';

export default function History() {
  const { transactions, filter, getAllTransactions, loading } =
    useContext(TransactionsContext);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(async () => {
    setTimeout(async () => {
      await getAllTransactions();
      setIsVisible(!isVisible);
    }, 1500);
    // setIsVisible(false);
  }, []);

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <ReactHTMLTableToExcel
            id='test-table-xls-button'
            className='laptop-xls absolute left-56 top-36 mt-1 w-32 switch text-white transition-all hover:rounded-xl hover:border-blue-500 border-b-2 w-20 h-12'
            table='table-to-xls'
            filename='transactions'
            sheet='transactions'
            buttonText='Download As XLS'
          />
          <div className='flex justify-center font-bold text-white text-6xl mt-20 mb-14'>
            History Of{' '}
            <span className='text-blue-500 font-bold ml-4'>Transactions</span>
          </div>
          <TransactionFilter />
          {!isVisible ? (
            <Spinner />
          ) : (
            <section
              className={`${
                !isVisible ? 'opacity-0' : ''
              } container mx-auto p-6 text-center bg-transparent`}
            >
              <motion.div
                variants={popup}
                initial='hidden'
                animate={isVisible ? 'show' : ''}
                className='mb-8 overflow-hidden text-center rounded-lg shadow-lg '
              >
                <motion.div className='w-full text-center overflow-x-auto '>
                  <table id='table-to-xls' className='w-full text-center'>
                    <thead>
                      <tr className='text-md text-center font-semibold tracking-wide text-left text-gray-900 bg-transparent uppercase border-b-2 border-gray-600'>
                        <th className='px-4 py-3 text-white text-2xl'>Date</th>
                        <th className='px-4 py-3 text-white text-2xl'>
                          Description
                        </th>
                        <th className='px-4 py-3 text-white text-2xl'>
                          Amount
                        </th>
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
                </motion.div>
              </motion.div>
            </section>
          )}
        </Fragment>
      )}
    </Fragment>
  );
}
