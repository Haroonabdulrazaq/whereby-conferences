import React from 'react';
import axios from 'axios';

import './meeting.css';

function Meeting() {

  // const API_KEY = process.env.REACT_APP_API_KEY;
  const createMeeting = async()=>{
    const response = await axios({
      method: 'GET',
      headers: { Accept: 'application/json' },
      url: `${process.env.REACT_APP_BACKEND_URL}/`,
      params: {
        isLocked: true,
      },
    });
    const result = await response;
    console.log('I am the result of the API call', result.data);
  }

  return (
    <div>
      <div className='create-meeting-btn' onClick={createMeeting}>Create Meeting</div>
    </div>
  )
}

export default Meeting;
