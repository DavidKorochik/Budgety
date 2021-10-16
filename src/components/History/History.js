import React, { useContext, Fragment, useEffect } from 'react';
import { TransactionsContext } from '../../store/transactions/TransactionsState';
import Transaction from '../Transaction/Transaction';
import TransactionFilter from '../TransactionFilter/TransactionFilter';
import Spinner from '../../utils/Spinner';
import { DateRangePicker } from 'react-dates';
import './History.css';

export default function History() {
  const { transactions, filter, getAllTransactions, loading } =
    useContext(TransactionsContext);

  useEffect(async () => {
    setTimeout(async () => {
      await getAllTransactions();
    }, 2000);
  }, []);

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
          {/* <DateRangePicker
          // startDate={this.state.startDate} // momentPropTypes.momentObj or null,
          // startDateId='your_unique_start_date_id' // PropTypes.string.isRequired,
          // endDate={this.state.endDate} // momentPropTypes.momentObj or null,
          // endDateId='your_unique_end_date_id' // PropTypes.string.isRequired,
          // onDatesChange={({ startDate, endDate }) =>
          //   this.setState({ startDate, endDate })
          // } // PropTypes.func.isRequired,
          // focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          // onFocusChange={(focusedInput) => this.setState({ focusedInput })} // PropTypes.func.isRequired,
          /> */}
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
