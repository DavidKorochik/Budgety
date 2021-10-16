import React, { Fragment } from 'react';
import './Home.css';

export default function Home() {
  return (
    <Fragment>
      <div className='desktop font-extrabold flex justify-center text-8xl text-white mt-20'>
        Welcome To <span className='ml-6 text-blue-500'>BUDGETY</span>
      </div>
      <div className=' flex text-white justify-center mt-60'>
        <div className='change changing b1 font-bold text-6xl text '>
          Take control of your{' '}
          <span className='text-blue-500'>incomes and expanses</span>
        </div>
        <div className='change changing b2 font-bold text-6xl text'>
          Change the way you manage your{' '}
          <span className='text-blue-500'>budget</span>
        </div>
        <div className='change changing b3 font-bold text-6xl text '>
          Take a closer look at your{' '}
          <span className='text-blue-500'>incomes and expanses</span> using
          charts
        </div>
        <div className='change changing b4 font-bold text-6xl text '>
          Take a huge step twords your{' '}
          <span className='text-blue-500'>financial freedom</span>
        </div>
        <div className='change changing b5 font-bold text-6xl text '>
          Manage your <span className='text-blue-500'>shared budget</span>
        </div>
      </div>
    </Fragment>
  );
}
