import React from 'react';
import axios from 'axios';

import './meeting.scss';

function Meeting() {

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
      console.log('Here is the response', response);
    })
    // const result = await response;
    // console.log('I am the result of the API call', result.data);
  }

  return (
    <div className='meeting-wrapper'>
      <div className='create-meeting-btn' onClick={createMeeting}>Create Meeting</div>
    </div>
  )
}

export default Meeting;
