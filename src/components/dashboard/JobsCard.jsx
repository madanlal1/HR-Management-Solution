import React from 'react';
import Card from '@mui/material/Card';

const JobsCard = ({imgSrc, title, time, width}) => {
  return (
    <div className="row innerCardContainer">
        <Card className='col innerCard' style={{padding:'5px'}}>
        <img src={imgSrc} alt="logo" width={width}/>
        </Card>
        <div className="col cardTitle">
        <h6>{title}</h6>
        <p>{time}</p>
        </div>
    </div>
  )
}

export default JobsCard