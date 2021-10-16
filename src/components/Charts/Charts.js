import React, { Fragment, useContext } from 'react';
import { Pie } from 'react-chartjs-2';
import { TransactionsContext } from '../../store/transactions/TransactionsState';
import './Charts.css';

export default function Charts() {
  const { transactions } = useContext(TransactionsContext);

  // const getMonthName = (month) => {
  //   const d = new Date();
  //   d.setMonth(month - 1);
  //   const monthName = d.toLocaleString('default', { month: 'long' });
  //   return monthName;
  // };

  const amounts = transactions.map((t) => Number(t.amount));
  // const dates = transactions.map((t) => getMonthName(t.date.split('-')[1]));

  let incomes = 0;
  let expanses = 0;

  amounts.forEach((a) => {
    if (a < 0) {
      expanses += a;
    } else {
      incomes += a;
    }
  });

  const state = {
    labels: ['Incomes', 'Expanses'],
    datasets: [
      {
        backgroundColor: ['rgba(59, 130, 246)', '#7a2048'],
        hoverBackgroundColor: ['#154360', '#4A235A'],
        data: [incomes, expanses],
        fontSize: 25,
      },
    ],
  };

  return (
    <div className='flex justify-center charts ml-40 mt-16 items-center w-1/4'>
      {incomes === 0 && expanses === 0 ? (
        <h1 className='text-blue-500 text-4xl'>
          You need Expnases or Incomes for{' '}
          <span className='font-extrabold'>"Expanses VS Incomes" Chart</span>!
        </h1>
      ) : (
        <Fragment>
          <Pie
            data={state}
            options={{
              plugins: {
                title: {
                  display: true,
                  color: 'white',
                  font: { weight: 'bold', size: 24 },
                  text: 'Expanses VS Incomes Chart',
                },
                legend: {
                  labels: {
                    font: {
                      size: 14,
                    },
                    color: 'white',
                    padding: 12,
                  },
                },
              },
            }}
          />
        </Fragment>
      )}
    </div>
  );
}
