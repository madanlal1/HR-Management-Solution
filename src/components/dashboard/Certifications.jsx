import React from 'react';
import Card from '@mui/material/Card';
import pdf from '../../assets/images/pdf.png';
import CertificationCard from './CertificationCard';

const Certifications = ({title, time}) => {
  return (
    <Card sx={{marginTop:'20px'}}>
        <label><strong>Certifications</strong></label> 
          <br/>
          <br/>
        <div style={{display:'block',height:'70px'}} className="row meetingSchedule" >
            <CertificationCard title="New Term and Policy" time="01-jan-2024"/>
        </div>
        <div style={{display:'block',height:'70px'}} className="row meetingSchedule" >
            <CertificationCard title="Leave and Holiday Policy" time="01-jan-2024"/>
        </div>
        <div style={{display:'block',height:'70px'}} className="row meetingSchedule" >
            <CertificationCard title="Important Payroll Information" time="01-jan-2024"/>
        </div>
        <div style={{display:'block',height:'70px'}} className="row meetingSchedule" >
            <CertificationCard title="Employee of the Month" time="01-jan-2024"/>
        </div>
        <div style={{display:'block',height:'70px'}} className="row meetingSchedule" >
            <CertificationCard title="Eid ul Fitr Notification" time="01-jan-2024"/>
        </div>
    </Card>
  )
}

export default Certifications