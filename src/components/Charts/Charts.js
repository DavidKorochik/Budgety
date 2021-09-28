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

  let incomes = 0;
  let expanses = 0;

  amounts.forEach((a) => {
    if (a < 0) {
      expanses += a;
    } else {
      incomes += a;
    }
  });

  // const state = {
  //   labels: [...dates],
  //   datasets: [
  //     {
  //       backgroundColor: [
  //         '#B21F00',
  //         '#C9DE00',
  //         '#2FDE00',
  //         '#00A6B4',
  //         '#6800B4',
  //         '#F7DC6F',
  //         '#D35400',
  //         '#212F3C',
  //         '#F0B27A',
  //         '#F1948A',
  //         '#7E5109',
  //         '#F5B7B1',
  //       ],
  //       hoverBackgroundColor: [
  //         '#501800',
  //         '#4B5000',
  //         '#175000',
  //         '#003350',
  //         '#35014F',
  //       ],
  //       data: [...amounts],
  //     },
  //   ],
  // };

  const state = {
    labels: ['Incomes', 'Expanses'],
    datasets: [
      {
        backgroundColor: ['#2ECC71', '#B21F00'],
        hoverBackgroundColor: ['#1D8348', '#501800'],
        data: [incomes, expanses],
        fontSize: 30,
      },
    ],
  };

  return (
    <div className='flex justify-center ml-20 mt-16 items-center w-1/3'>
      {incomes === 0 && expanses === 0 ? (
        <h1 className='text-blue-500 text-4xl'>
          You need Expnases or Incomes for <br />
          <span className='font-extrabold'>"Expanses VS Incomes" chart</span>!
        </h1>
      ) : (
        <Pie
          data={state}
          options={{
            title: { text: 'Transactions By Month', fontSize: 30 },
            legend: { display: true },
          }}
        />
      )}
    </div>
  );
}
