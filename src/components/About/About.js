import React, { Fragment } from 'react';

export default function About() {
  return (
    <Fragment>
      <div className='text-white font-bold text-6xl flex justify-center mt-20 mb-14'>
        <h1>
          About <span className='text-blue-500 font-bold'>Us</span>
        </h1>
      </div>
      <div className='text-4xl flex justify-center mt-28 leading-relaxed text-white'>
        Our goal is to help manage your monthly budget so you can keep an eye on
        <br />
        the expanses and incomes you are making.
      </div>
      <div className='text-5xl flex justify-center mt-28 font-extrabold text-7xl text-blue-500'>
        The road to financial freedom is here!
      </div>
    </Fragment>
  );
}
