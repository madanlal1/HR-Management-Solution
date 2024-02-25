import hrmImage from '../assets/images/hr-solution.jpg';
import megaHCM from '../assets/images/megaHCM.webp';
import logo from '../assets/images/logo.jpg';
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';

const SignIn = () => {

    const [employeeId, setEmployeeId] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate();

    const handleChange = () => {
        if(employeeId === "sourcecode" && password === "123") {
            navigate('/dashboard');
        }
        else {
            alert("EmployeeId or Password is not correct!")
        }
    }


  return (
    <>
        <div className="row SignInContainer g-0">
            <div className="col-sm-12 col-md-6 col-lg-6 innerContainer">
                <div className="imageSide">
                    <img src={hrmImage} className='mb-3' alt="HRM Vector Image" width="60%"/>
                    <h4>The Ultimate <span>HR Management Solution</span></h4>
                    <p>At SourceCode, we have a reliable, secure and adaptable HR management build from the ground up. We are determined to help our employees to give their best efforts every day to achieve the goals of their job.</p>
                </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 innerContainer">
                <div className="signInForm">
                    <img src={logo} className='mb-4' alt="logo" width="65%"/>
                    <p>Log in to start your session</p>
                    <input className='form-control mb-3 mt-4' value={employeeId} onChange={(e) => setEmployeeId(e.target.value)} type="text" placeholder='Employee Code'/>
                    <input className='form-control mb-3' value={password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder='Password'/>
                    <button className='btn btn-primary form-control mb-4' onClick={() => handleChange()}>LOG IN</button>
                    <img src={megaHCM} className='mb-4' alt="megaHCM logo" width="60%"/>
                    <p>&copy; 2024 MegaHCM. All Rights Reserved</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default SignIn