import React, { Fragment, useContext } from 'react';
import { TransactionsContext } from '../../store/transactions/TransactionsState';
import './Transaction.css';
import { useHistory } from 'react-router';

export default function Transaction({ transaction }) {
  const { deleteTransaction, setCurrent, clearCurrent } =
    useContext(TransactionsContext);

  const { date, description, amount, id } = transaction;

  let history = useHistory();

  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  };

  const newDate = date.replace(/\-/g, '/').split('/');

  const updatedDate = `${newDate[2]}/${newDate[1]}/${newDate[0]}`;

  const handleEdit = () => {
    setCurrent(transaction);
    history.push('/income-expanses');
  };

  const handleDelete = () => {
    deleteTransaction(id);
    clearCurrent();
  };

  return (
    <Fragment>
      <tbody className='text-center bg-transparent'>
        <tr className='text-center'>
          <td className='px-4 py-3 '>
            <div className='items-center text-sm'>
              <div className='text-center '>
                <p
                  className={`text-center font-semibold text-xl text-blue-500 ${
                    amount < 0 ? 'expanse' : ''
                  }`}
                >
                  {updatedDate}
                </p>
              </div>
            </div>
          </td>
          <td
            className={`px-4 py-3 text-centers text-xl text-blue-500 font-semibold  ${
              amount < 0 ? 'expanse' : ''
            }`}
          >
            {description}
          </td>
          <td
            className={`px-4 py-3 text-xl text-blue-500  font-semibold text-center ${
              amount < 0 ? 'expanse' : ''
            }`}
          >
            {formatNumber(amount.toFixed(3))}
            <span className='ml-1'>&#8362;</span>
          </td>
          <i
            onClick={handleEdit}
            class='fa-solid fa-pen text-green-600 cursor-pointer mt-2 text-2xl mr-4'
          ></i>
          <i
            onClick={handleDelete}
            className='fa-solid fa-trash-can text-red-600 cursor-pointer mt-2 text-2xl'
          ></i>
        </tr>
      </tbody>
    </Fragment>
  );
}
