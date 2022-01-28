import React, { useState } from 'react';
import axios from 'axios';
import Data from './Data';

import './meeting.scss';

function Meeting() {
 const [myData, setMyData] =  useState(null);
  // const API_KEY = process.env.REACT_APP_API_KEY;
  const createMeeting = async()=>{
    await axios({
      method: 'GET',
      config: {
        headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }},
      url: `${process.env.REACT_APP_BACKEND_URL}/create-meeting`,
      params: {
        isLocked: true,
      },
    }).then((response)=>{
      const { data } = response;
      console.log('Here is the Data from response', data);
      if(data.status === 200) {
        setMyData(data.data);
      }
    })
    // const result = await response;
    // console.log('I am the result of the API call', result.data);
  }

  return (
    <div className='meeting-wrapper'>
      <div className='meeting-sidebar'>
        <div className='header-name'>
          <h2>Welcome</h2><h2>to</h2>
        <h2> Whereby-Conference</h2>
        </div>
      </div>
      <div className='meeting-content'>
        <Data myData ={myData}/>
        <button className='create-meeting-btn' onClick={createMeeting}>Create Meeting</button>
      </div>
    </div>
  )
}

export default Meeting;
