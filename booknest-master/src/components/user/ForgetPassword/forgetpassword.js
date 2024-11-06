import { useState, useRef } from 'react';
import './forgetpassword.css'
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../header/header';
import axios from '../../../interceptor.js';
import { apiEndPoint } from '../../../webApi/webapi';
import { ToastContainer, toast } from 'react-toastify';
import ChangePassword from '../changepassword.js/changepassword';
function ForgetPassword() {
    const navigate = useNavigate();
    const email = useRef(null);
    const OTP = useRef(null);
    const [otpStatus, setOtpStatus] = useState(false);
    const [otp,setOtp] = useState(null);
    const[status,setStatus]=useState(false);
    const sendingTime = 0;
    const handlesubmit = async (event) => {
        event.preventDefault();
        const response = await axios.post(apiEndPoint.USER_CHECK, { email: email.current.value });
        if (response.data.status) {
           
            setOtpStatus(response.data.status);
            setOtp(response.data.otp);
        }
        else
            toast.error("This user is unauthorized...");

    }
    const updatePassword = async ()=>{
       
        if(sendingTime+5<=new Date().getMinutes())
        {
            if(otp==OTP.current.value)
            {
                setStatus(true);
                // navigate('/changePassword',{state:{user:email.current.value}});
            }
            else
                toast.error('OTP Mis-match');
        }
        else
            toast.error('OTP Is expires...');
    }
    return <>
        <Header />
        <ToastContainer />
        {!status?
        <div className="container">
            <div className="row m-auto">
                <div className="col-md-4 col-md-offset-4 m-auto forgetpassword mt-5" >
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <div className="text-center">
                                <h3 className='mt-3'>
                                    <i className="fa fa-lock fa-4x lock" />
                                </h3>
                                <h2 className="text-center changepasswordHeading">Forgot Password?</h2>
                                <p>You can reset your password here.</p>
                                <div className="panel-body">
                                    <form>

                                        <div className="form-group">
                                            <div className="input-group mt-3">
                                                <span className="input-group-addon mt-2">
                                                    <i className="glyphicon glyphicon-envelope color-blue" />
                                                </span>
                                                <input id="email" name="email" ref={email} placeholder="Please Enter Email " className="form-control" type="email" />

                                            </div>

                                            <div className="input-group">
                                                <span className="input-group-addon">
                                                    <i className="glyphicon glyphicon-envelope color-blue" />
                                                </span>
                                                <button class="cartbutton " data-toggle="collapse" href="#collapseExample" role="button" onClick={handlesubmit} aria-expanded="false" aria-controls="collapseExample">Send OTP</button>
                                            </div>
                                            <div class="collapse" id="collapseExample">
                                                {otpStatus?<>
                                                    <div className="input-group mt-3">
                                                    <span className="input-group-addon">
                                                        <i className="glyphicon glyphicon-envelope color-blue" />
                                                    </span>

                                                    <input id="email" name="email" ref={OTP} placeholder="Enter Otp" className="form-control" type="number" />
                                                </div>
                                                <div className="form-group">
                                                    <button onClick={updatePassword} className="btn btn-lg cartbutton btn-block"  type="submit">Reset Password</button>
                                                </div></>:<></>}
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>:<ChangePassword/>}
    </>


}

export default ForgetPassword;


