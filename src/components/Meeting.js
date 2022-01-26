import React from 'react';
import axios from 'axios';

import './meeting.css';

function Meeting() {

  const API_KEY = process.env.REACT_APP_API_KEY;
  const createMeeting = async()=>{
    // console.log('Hello world');
    const response = await axios({
      method: 'GET',
      url: `${process.env.REACT_APP_BACKEND_URL}/`,
      params: {
        isLocked: true,
      },
    });
  }

  return (
    <div>
      <div className='create-meeting-btn' onClick={createMeeting}>Create Meeting</div>
    </div>
  )
}

export default Meeting;
