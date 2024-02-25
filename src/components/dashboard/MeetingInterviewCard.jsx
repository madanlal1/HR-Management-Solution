import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';
import MeetingScheduleCard from './MeetingScheduleCard';

const data = [
    { value: 5, label: 'A' },
    { value: 10, label: 'B' },
    { value: 15, label: 'C' },
    { value: 20, label: 'D' },
  ];
  
  const size = {
    width: 400,
    height: 200,
  };
  
  const StyledText = styled('text')(({ theme }) => ({
    fill: theme.palette.text.primary,
    textAnchor: 'middle',
    dominantBaseline: 'central',
    fontSize: 20,
  }));
  
  function PieCenterLabel({ children }) {
    const { width, height, left, top } = useDrawingArea();
    return (
      <StyledText x={left + width / 2} y={top + height / 2}>
        {children}
      </StyledText>
    );
  }

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function MeetingInterviewCard() {
  return (
    <Card sx={{ minWidth: 275 }} className='cardParentContainer'>
      <CardContent>
        <div className="row">
            <div className="col-9">
                <label><strong>Meetings and Interview</strong></label> 
            </div>
            <div className="col-3">
                <button className='btn btn-outline-primary'>Create New</button>
            </div>
        </div>
        <div style={{display:'block',height:'70px'}} className="row meetingSchedule" >
          <MeetingScheduleCard day="Mon" date="10" title="Interview" time="9:00 am to 11:30 am"/>
        </div>
        <div style={{display:'block',height:'70px'}} className="row meetingSchedule" >
          <MeetingScheduleCard day="Thu" date="08" title="Organizational Meeting" time="9:00 am to 11:30 am"/>
        </div>
        <div style={{display:'block',height:'70px'}} className="row meetingSchedule" >
          <MeetingScheduleCard day="Fri" date="11" title="Meeting with the manager" time="9:00 am to 11:30 am"/>
        </div>
        <div style={{display:'block',height:'70px'}} className="row meetingSchedule" >
          <MeetingScheduleCard day="Fri" date="11" title="Meeting with the manager" time="9:00 am to 11:30 am"/>
        </div>
        <div style={{display:'block',height:'70px'}} className="row meetingSchedule" >
          <MeetingScheduleCard day="Fri" date="11" title="Meeting with the manager" time="9:00 am to 11:30 am"/>
        </div>
      </CardContent>
    </Card>
  );
}