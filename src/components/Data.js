import React from 'react';
import './data.scss';

const Data = (props) => {
  //  console.log('this is props in Data ', props.myData.meetingId);
  // props.myData.startDate.split('T')[0]
  return (
    <>
      {!props.loading && 
        <div className='data-wrapper'>
          <h1 style={{marginBottom: 20}}>Meeting Detail</h1>
          <div className='meeting-data'>Meeting ID: {props.myData.meetingId} </div> 
          <div className='meeting-data'>Start Date: {props.myData.startDate.split('.')[0] } </div>
          <div className='meeting-data'>End Date: {props.myData.endDate.split('.')[0]} </div>
          <div className='meeting-data'>Room Url: {`${props.myData.roomUrl}?minimal`}</div>
          <div className='meeting-data'><a href={props.myData.hostRoomUrl} target='_blank' rel="noreferrer">Host Url</a></div>
        </div>
      }
    </>
  )
}

export default Data;
