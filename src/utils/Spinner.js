import Loader from 'react-loader-spinner';

export default function Spinner() {
  return (
    <Loader
      className='flex justify-center'
      type='TailSpin'
      color='#00BFFF'
      height={700}
      width={400}
    />
  );
}
