import * as React from 'react';
import { styled, useTheme, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import logo from '../assets/images/megaHCM.webp';
import Sidebar from './Sidebar';
import Attendance from './Attendance';
import developerImage from  "../assets/images/developer.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube } from '@fortawesome/free-solid-svg-icons';
import LeavesCard from './dashboard/LeavesCard';
import AnnouncementCard from './dashboard/AnnouncementCard';
import MeetingInterviewCard from './dashboard/MeetingInterviewCard';
import RecentJobsCard from './dashboard/RecentJobsCard';
import ReportingAuthorities from './dashboard/ReportingAuthorities';
import Certifications from './dashboard/Certifications';
import Feedback from './dashboard/Feedback';
import Navbar from './dashboard/Navbar';

export default function Dashboard() {
  
  return (
    <>
    <Navbar/>
    <Box className='attendanceOuterContainer' >
    <Attendance/>
    </Box>
    <Box>
        <div className="row section2">
          <div className="col-4">
            <LeavesCard/>
          </div>
          <div className="col-8">
            <AnnouncementCard/>
          </div>
        </div>
    </Box>
    <Box>
        <div className="row section2">
          <div className="col-4">
            <RecentJobsCard/>
          </div>
          <div className="col-8">
            <MeetingInterviewCard/>
          </div>
        </div>
    </Box>
    <Box>
        <div className="row section2">
          <div className="col-8">
            <div className="row">
              <ReportingAuthorities/>
            </div>
            <div className="row">
            <Certifications/>
            </div>
          </div>
          <div className="col-4">
            <Feedback/>
          </div>
        </div>
    </Box>
    </>
  );
}