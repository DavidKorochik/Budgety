import React, { useContext } from 'react';
import { Doughnut, Line, Pie } from 'react-chartjs-2';
import { TransactionsContext } from '../../store/transactions/TransactionsState';

export default function Charts() {
  const { transactions } = useContext(TransactionsContext);

  const getMonthName = (month) => {
    const d = new Date();
    d.setMonth(month - 1);
    const monthName = d.toLocaleString('default', { month: 'long' });
    return monthName;
  };

  const amounts = transactions.map((t) => Number(t.amount));
  const dates = transactions.map((t) => getMonthName(t.date.split('-')[1]));

  const state = {
    labels: [...dates],
    datasets: [
      {
        backgroundColor: [
          '#B21F00',
          '#C9DE00',
          '#2FDE00',
          '#00A6B4',
          '#6800B4',
          '#F7DC6F',
          '#D35400',
          '#212F3C',
          '#F0B27A',
          '#F1948A',
          '#7E5109',
          '#F5B7B1',
        ],
        hoverBackgroundColor: [
          '#501800',
          '#4B5000',
          '#175000',
          '#003350',
          '#35014F',
        ],
        data: [...amounts],
      },
    ],
  };
  return (
    <div className='flex justify-center ml-20 mt-16 items-center w-1/3'>
      <Pie
        data={state}
        options={{
          title: { text: 'Transactions By Month', fontSize: 25 },
          legend: { display: true },
        }}
      />
    </div>
  );
}
