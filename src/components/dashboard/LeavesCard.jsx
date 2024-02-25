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

const data = [
    { value: 5, label: 'Sick Leaves' },
    { value: 10, label: 'Annual Leaves' },
    { value: 15, label: 'Casual Leaves' },
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

export default function LeavesCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
          <label><strong>Number of Leave Remaining</strong></label> 
          <p>As of now August 28, 2023.</p> 
          <PieChart series={[{ data, innerRadius: 75 }]} {...size}>
            <PieCenterLabel>Total Leave 16</PieCenterLabel>
          </PieChart>
          <br/>
          <div className='boxContainer'>
            <div className='box box1'></div>
            <h6>&nbsp;&nbsp;{data[0].label}</h6>
            <h6>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5</h6>
          </div>
          <div className='boxContainer'>
            <div className='box box2'></div>
            <h6>&nbsp;&nbsp;{data[1].label}</h6>
            <h6>&nbsp;&nbsp;65</h6>
          </div>
          <div className='boxContainer'>
            <div className='box box3'></div>
            <h6>&nbsp;&nbsp;{data[2].label}</h6>
            <h6>&nbsp;&nbsp;65</h6>
          </div>
      </CardContent>
    </Card>
  );
}