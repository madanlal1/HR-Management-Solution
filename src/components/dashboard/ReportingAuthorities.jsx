import React from 'react';
import Card from '@mui/material/Card';
import AuthoritiesProfileCard from './AuthoritiesProfileCard';

const ReportingAuthorities = ({imgSrc, title, time, width}) => {
  return (
    <Card>
        <label><strong>Reporting Authorities</strong></label> 
        <div className="row">
            <div className="col"><AuthoritiesProfileCard/></div>
            <div className="col"><AuthoritiesProfileCard/></div>
            <div className="col"><AuthoritiesProfileCard/></div>
        </div>
    </Card>
  )
}

export default ReportingAuthorities;