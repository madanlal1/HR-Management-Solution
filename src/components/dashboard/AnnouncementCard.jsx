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

export default function AnnouncementCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <div className="row">
            <div className="col-9">
                <label><strong>Announcement</strong></label> 
            </div>
            <div className="col-3">
                <button className='btn btn-outline-primary'>Create New</button>
            </div>
        </div>
          <p><strong>Quaid E Azam Day & Christmis</strong></p> 
          <p>Dear Team,</p> 
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, enim, quo quae quisquam nam non sed odio officiis itaque architecto maiores consectetur qui dicta alias labore at sit accusamus nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident laboriosam illum earum dignissimos voluptatum quia eligendi qui! Esse cupiditate dolore eaque incidunt maiores asperiores, distinctio magni et consequuntur quam blanditiis?</p>
          <p>Best Regards,</p>
      </CardContent>
    </Card>
  );
}