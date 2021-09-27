import React, { Fragment, useContext } from 'react';
import { TransactionsContext } from '../../store/transactions/TransactionsState';

export default function Transaction({ amount, description, date, id }) {
  const { deleteTransaction, updateTransaction } =
    useContext(TransactionsContext);

  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  };

  return (
    <Fragment>
      <tbody className='text-center bg-transparent'>
        <tr className='text-center'>
          <td className='px-4 py-3 border'>
            <div className='items-center text-sm'>
              <div className='text-center '>
                <p className=' text-center font-semibold text-xl text-blue-500'>
                  {date}
                </p>
              </div>
            </div>
          </td>
          <td className='px-4 py-3 text-centers text-xl text-blue-500 font-semibold border'>
            {description}
          </td>
          <td className='px-4 py-3 text-xl text-blue-500 border font-semibold text-center'>
            {formatNumber(amount.toFixed(3))}
            <span className='ml-1'>&#8362;</span>
          </td>
        </tr>
      </tbody>
    </Fragment>
  );
}
