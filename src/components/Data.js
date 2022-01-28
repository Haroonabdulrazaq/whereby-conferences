import React from 'react';
import './data.scss';

const Data = (props) => {
  console.log('this is props in Data ', props.myData);
  return (
    <>
      <div className='data-wrapper'>
        <div>{props.myData? props.myData.startDate : null }</div>
      </div>
    </>
  )
}

export default Data;
