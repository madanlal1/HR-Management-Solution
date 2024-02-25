import React from 'react';
import Card from '@mui/material/Card';
import pdf from '../../assets/images/pdf.png'

const CertificationCard = ({title, time}) => {
  return (
    <div className="row innerCardContainer">
        <Card className='col innerCard'>
        <img src={pdf} alt="logo" width="25px"/>
        </Card>
        <div className="col cardTitle">
        <h6>{title}</h6>
        <p>{time}</p>
        </div>
    </div>
  )
}

export default CertificationCard