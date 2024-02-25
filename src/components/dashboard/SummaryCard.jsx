import * as React from 'react';
import Stack from '@mui/material/Stack';
import { PieChart } from '@mui/x-charts/PieChart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';

const data = [
  { label: 'Group A', value: 400 },
  { label: 'Group B', value: 200 },
];

export default function SummaryCard({title, total, desc, clr}) {
  return (
    <div className="cardContainer row" style={{backgroundColor:`${clr}`}}>
        <div className="col-8 cardDesc">
            <h6>{title}</h6>
            <h5>{total}</h5>
            <span style={{fontSize: '10px', fontWeight:'bold'}}>
                <FontAwesomeIcon icon={faArrowTrendUp} />
                &nbsp; {desc}
            </span>
        </div>
        <div className="col-4 chartCol">
            <Stack direction="row">
            <PieChart
                series={[
                    {
                        paddingAngle: 5,
                        innerRadius: 25,
                        outerRadius: 35,
                        data,
                    },
            ]}
                margin={{ right: 5 }}
                width={80}
                height={80}
                legend={{ hidden: true }}
            />
            </Stack>
        </div>
    </div>
  );
}