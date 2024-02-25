import React from 'react';
import Card from '@mui/material/Card';
import post from '../../assets/images/post.jpeg';
import logo from '../../assets/images/logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faShare, faBookmark } from '@fortawesome/free-solid-svg-icons';

const Feedback = ({title, time}) => {
  return (
    <Card sx={{padding:'20px'}}>
        <div className="row">
            <div className="col-8">
                <label><strong>Source Code</strong></label> 
            </div>
            <div className="col-4">
                <button className='btn btn-outline-primary btn-sm'>Facebook</button>
            </div>
        </div>
        <Card sx={{marginTop:'16px',padding:'16px'}}>
            <img src={logo} alt="sourceCode logo" width="100px"/>
            <div className="cardImage" style={{display:'flex',justifyContent:'center',}}>
                <img src={post} alt="post" width="90%" style={{borderRadius:'10px', marginTop:'16px'}}/>
            </div>
            <div className="row">
                <div className="col-9">
                <FontAwesomeIcon icon={faHeart} style={{fontSize:'20px',padding:'8px 8px 8px 20px', color:'red'}}/>
                <FontAwesomeIcon icon={faComment} style={{fontSize:'20px', padding:'8px'}}/>
                <FontAwesomeIcon icon={faShare} style={{fontSize:'20px', padding:'8px'}}/>
                </div>
                <div className="col-3">
                    <FontAwesomeIcon icon={faBookmark} style={{fontSize:'20px', padding:'8px'}}/>
                </div>
            </div>
            <div className="feedbackFooter">
                <label id='label1'><strong>SourceCode</strong></label> <br/>
                <label id="label2"><strong>View all 145 Comments</strong></label> 
            </div>
        </Card>
    </Card>
  )
}

export default Feedback