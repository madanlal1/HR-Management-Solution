import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import JobsCard from './JobsCard';
import figma from '../../assets/images/figma.png';
import spotify from '../../assets/images/spotify.webp';
import ios from '../../assets/images/ios.png';
import brand from '../../assets/images/brand.webp';

export default function RecentJobsCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
          <label><strong>Recent Added Jobs</strong></label> 
          <br/>
          <br/>
          <div style={{display:'block',height:'70px'}} className="row meetingSchedule" >
          <JobsCard imgSrc={figma} title="Jr. Figma Engineer" time="2 Days ago" width="25px"/>
          </div>
          <div style={{display:'block',height:'70px'}} className="row meetingSchedule" >
          <JobsCard imgSrc={spotify} title="Product Engineer" time="Spotify, Singapure - 6 Days ago" width="40px"/>
          </div>
          <div style={{display:'block',height:'70px'}} className="row meetingSchedule" >
          <JobsCard imgSrc={ios} title="iOS Engineer" time="San Fransisco, CA - 2 Days ago" width="40px"/>
          </div>
          <div style={{display:'block',height:'70px'}} className="row meetingSchedule" >
          <JobsCard imgSrc={brand} title="Brand Strategist" time="New York, US - 2 Days ago" width="30px"/>
          </div>
      </CardContent>
    </Card>
  );
}   