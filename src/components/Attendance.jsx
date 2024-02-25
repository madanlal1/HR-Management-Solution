import React from 'react'
import SummaryCard from './dashboard/SummaryCard'

const Attendance = () => {
  return (
    <div className='attendanceContainer'>
        <label><strong>My Attendance Summary</strong>{` (January-2024)`}</label>
        <div className="row summaryCardOuterContainer">
            <div className="col"><SummaryCard title="Total Present" total="24" desc="31 DAYS" clr="lightgreen"/></div>
            <div className="col"><SummaryCard title="On Leaves" total="03" desc="Casual" clr="lightsalmon"/></div>
            <div className="col"><SummaryCard title="On Absent" total="02" desc="Leave Disprove" clr="lightcoral"/></div>
            <div className="col"><SummaryCard title="OFF Days" total="08" desc="Weeks" clr="lightblue"/></div>
        </div>
    </div>
  )
}

export default Attendance