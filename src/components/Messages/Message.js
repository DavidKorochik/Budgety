import React, { useContext } from 'react';
import { TransactionsContext } from '../../store/transactions/TransactionsState';

export default function Message() {
  const { message } = useContext(TransactionsContext);

  return (
    message.length > 0 &&
    message.map((m) => (
      <div
        className={`font-mono ${m.type} ml-20 flex w-11/12 justify-center font-bold text-white mt-2 text-3xl p-2 rounded-lg`}
        key={m.id}
      >
        <i className='fas fa-info-circle mr-4'></i> {m.message}
      </div>
    ))
  );
}
