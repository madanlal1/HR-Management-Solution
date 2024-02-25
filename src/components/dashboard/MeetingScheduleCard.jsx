import React from 'react';
import Card from '@mui/material/Card';

const MeetingScheduleCard = ({day, date, title, time}) => {
  return (
    <div className="row innerCardContainer">
        <Card className='col innerCard'>
        <h6 id='day'>{day}</h6>
        <h6>{date}</h6>
        </Card>
        <div className="col cardTitle">
        <h6>{title}</h6>
        <p>{time}</p>
        </div>
    </div>
  )
}

export default MeetingScheduleCard