import React from 'react'
import Card from '@mui/material/Card';

const AttendanceCards = ({title, total}) => {
  return (
    <>
        <Card className="attendanceCard">
                <h6>{title}</h6>
                <h5>{total}</h5>
        </Card>
    </>
  )
}

export default AttendanceCards