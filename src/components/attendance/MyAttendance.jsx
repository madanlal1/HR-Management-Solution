import React from 'react'
import Navbar from '../dashboard/Navbar';
import Box from '@mui/material/Box';
import AttendanceCards from './AttendanceCards';
import DataTable from './DataTable';

const MyAttendance = () => {
  return (
    <>
        <Navbar/>
        <div className='myAttendanceContainer'>
            <label><strong>My Attendance Summary</strong>{` (January-2024)`}</label>
            <div className="row summaryCardOuterContainer">
                <div className="col"><AttendanceCards title="Total Present" total="24"/></div>
                <div className="col"><AttendanceCards title="Late/Early" total="03"/></div>
                <div className="col"><AttendanceCards title="Half Day" total="02"/></div>
                <div className="col"><AttendanceCards title="Absent" total="08" /></div>
                <div className="col"><AttendanceCards title="OffDays/Holiday" total="08" /></div>
                <div className="col"><AttendanceCards title="On Leaves" total="08" /></div>
            </div>
        </div>
        <DataTable/>
    </>
  )
}

export default MyAttendance