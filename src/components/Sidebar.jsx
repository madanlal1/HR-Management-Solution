import {useState} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Divider from '@mui/material/Divider';
import Fade from '@mui/material/Fade';
import { faGear, faFolder, faFile, faCreditCard, faFileInvoiceDollar, faFolderOpen, faTableCellsLarge } from '@fortawesome/free-solid-svg-icons';



export default function Sidebar() {
  const [expanded, setExpanded] = useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <div>
      <Accordion
        id="acc1"
        expanded={expanded}
        onChange={handleExpansion}
        slots={{ transition: Fade }}
        slotProps={{ transition: { timeout: 400 } }}
        sx={{
          '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
          '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>
            <FontAwesomeIcon icon={faTableCellsLarge} />
              &nbsp;&nbsp;
              Dashboard
            </Typography>
        </AccordionSummary>
        {/* <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails> */}
      </Accordion>
      <Accordion id="acc2">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>
            <FontAwesomeIcon icon={faGear} />
            &nbsp;&nbsp;
            Attendance
            </Typography>
        </AccordionSummary>
        <AccordionDetails id='attendance'>
            <ul>
                <li>
                    &nbsp;&nbsp;&nbsp;&nbsp; 
                        <a href="#">
                            Attendance Request
                        </a>
                </li>
                <br/>
                <li>
                    &nbsp;&nbsp;&nbsp;&nbsp; 
                    <a href="#">
                        My Attendance
                    </a>
                </li>
                <br/>
                <li>
                    &nbsp;&nbsp;&nbsp;&nbsp; 
                    <a href="#">
                        Attendance Request
                    </a>
                </li>
                <br/>
                <li>
                    &nbsp;&nbsp;&nbsp;&nbsp; 
                    <a href="#">
                        My Shift Time
                    </a>
                </li>
                <br/>
                <li>
                    &nbsp;&nbsp;&nbsp;&nbsp; 
                    <a href="#">
                        Remote Work Request
                    </a>
                </li>
            </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion id="acc3">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>
            <FontAwesomeIcon icon={faFolder} />
            &nbsp;&nbsp;
            Leave
            </Typography>
        </AccordionSummary>
        {/* <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails> */}
      </Accordion>
      <Accordion id="acc4">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>
            <FontAwesomeIcon icon={faFile} />
            &nbsp;&nbsp;
            Recruitment
            </Typography>
        </AccordionSummary>
        {/* <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails> */}
      </Accordion>
      <Accordion id="acc5">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>
            <FontAwesomeIcon icon={faCreditCard} />
            &nbsp;&nbsp;
            Payroll
            </Typography>
        </AccordionSummary>
        {/* <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails> */}
      </Accordion>
      <Accordion id="acc6">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>
            <FontAwesomeIcon icon={faFileInvoiceDollar} />
            &nbsp;&nbsp;
            Loan
            </Typography>
        </AccordionSummary>
        {/* <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails> */}
      </Accordion>
      <Accordion id="acc7">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>
            <FontAwesomeIcon icon={faFolderOpen} />
            &nbsp;&nbsp;
            Others
            </Typography>
        </AccordionSummary>
        {/* <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails> */}
      </Accordion>
    </div>
  );
}