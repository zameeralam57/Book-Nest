import "./signup.css"
import { useRef, useState } from 'react'
import Header from "../../header/header";
import axios from "../../../interceptor";
import { toast, ToastContainer } from "react-toastify"
import { apiEndPoint } from "../../../webApi/webapi";
import { Link, useNavigate } from "react-router-dom";
import { createAsyncThunk } from "@reduxjs/toolkit";
import 'react-toastify/dist/ReactToastify.css'
import Footer from "../../footer/footer";
import GoogleLogin from "../GoogleLogin";
import Loader from "../../Spinner/Loader";
function SignUp() {
    const [Otp, setOtp] = useState("");
    let name = useRef("");
    let email = useRef("");
    let password = useRef("");
    let contact = useRef("");
    let otp = useRef("");
    let pappu;
    var profileImage=[];
    var mtime;
    var modalDismiss;
    const [isSignupDisabled, setIsSignupDisabled] = useState(true);
    const [isLoading,setIsLoading] = useState(true);
    const [modal,setModal] = useState(false);
    const [loader,setLoader] = useState(false);
    const navigate = useNavigate();

    const changeHome = () => {
        navigate("/")
    }
    const profileUpload = (event)=>{
         profileImage = event.target.files[0];
    }
    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            let response = await axios.post(apiEndPoint.USER_VERIFY, { name: name.current.valueOf, email: email.current.valueOf });
            console.log(response.data)
            pappu = response.data.result.OTP;
            // setModal(response.data.status);
            mtime = response.data.result.currentTime;
            
        }
        catch (err) {
            setModal(false);
            console.error(err);
            if (err.response.status == 400)
                toast.warning("User is Already Exist's");
            else
                toast.error("Ohhoo Something went wrong");
        }
    }

    const registration = async (event) => {
        const formData = new FormData();
        formData.append("profile",profileImage);
        formData.set("name",name.current.value);
        formData.set("email",email.current.value);
        formData.set("contact",contact.current.value);
        formData.set("password",password.current.value);
        modalDismiss = false;
        if (true) {
            if (pappu == otp.current.value) {
                setLoader(true);
                const response = await axios.post(apiEndPoint.USER_SIGNUP,formData);
                toast("Registration Success....")
                window.location.reload('');

            }
            else
                toast.error("Invalid OTP...");
        }
        else
            toast.error("Ohho! OTP expires...");
    }

    // const signupSubmitBtn = async () => {
    //     var name = await document.getElementById('name').value;
    //     var email = await document.getElementById('email').value;
    //     var password = await document.getElementById('password').value;
    //     var contact = await document.getElementById('contact').value;
    //     if (email.length && password.length >= 8 && name.length && contact.length == 10) {
    //         document.getElementById('signupsubmitbtn').removeAttribute('disabled','true');
    //     }
    //     else {
    //         document.getElementById('signupsubmitbtn').setAttribute('disabled', 'true');
    //     }
    // }
    const signupSubmitBtn = () => {
        const nameValue = name.current.value;
        const emailValue = email.current.value;
        const passwordValue = password.current.value;
        const contactValue = contact.current.value;
        setIsSignupDisabled(!(emailValue && passwordValue.length >= 8 && nameValue && contactValue.length === 10));
    };
    
    return <>
        <Header />
        <ToastContainer />
        {loader&& isLoading&&<Loader/>}
        <div className="breadcrumbs-area ">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="breadcrumbs-menu">
                            <ul>
                                <li><a onClick={changeHome}>Home</a></li>
                                <li><a href="#" className="active">SignUp</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section className="vh-100">
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11">

                        <div className="row justify-content-center">
                            <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-2 order-lg-1 mb-3 " >
                                <img
                                    src="https://images.unsplash.com/photo-1608099269227-82de5da1e4a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJvb2tzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
                                 
                                    className="img-fluid img responsive signupimg" style={{ borderRadius: "0px 10% 0% 10%", boxShadow: "0px 0px 15px gray", height: "400px", width: " 90%", backgroundSize: "contain" }}
                                    alt="Sample image"
                                />
                            </div>
                            <div className="col-md-10 col-lg-6 col-xl-5 order-1 order-lg-2">
                                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4" style={{ color: "#f07c29", textShadow: "2px 2px 2px gray" }}>
                                    Sign up
                                </p>
                                <form onSubmit={handleSubmit} id='registrationForm'>
                                    <div className="form-group">

                                        <input ref={name} type="text" onBlur={signupSubmitBtn} placeholder="Enter name" className="form-control" id="name" name="name" required />
                                    </div>
                                    <div className="form-group">
                                        <input ref={email} type="email" onBlur={signupSubmitBtn} placeholder="Enter email" className="form-control" id="email" name="email" required />
                                    </div>
                                    <div className="form-group">

                                        <input ref={password} type="password" onBlur={signupSubmitBtn} placeholder="Enter password" className="form-control" id="password" name="password" required />
                                    </div>
                                    <div className="form-group">
                                        <input ref={contact} type="text" onBlur={signupSubmitBtn} placeholder="Enter contact number" id="contact" className="form-control" required />
                                    </div>
                                    <div>
                                        <i className="fa fa-mars-stroke me-3" style={{ fontSize: "18px" }}></i>
                                        <input className="" type="radio" value="MALE" name="gender" defaultChecked /> Male
                                        <input className="mb-4 ms-4" type="radio" value="FEMALE" name="gender" /> Female
                                        <input className="mb-4 ms-4" type="radio" value="OTHER" name="gender" /> Other
                                    </div>
                                    <div>
                                        <i className="fa fa-user me-3"></i>
                                        <input onChange={profileUpload} className="mb-4" type="file" accept="image" required />
                                    </div>
                                    <div className="form-group text-center">
                                            {modal ?
                                                <button type="submit" className="btn submitbtn w-100">
                                            Sign Up
                                            <button type="submit" id="signupsubmitbtn" className="btn submitbtn w-100" disabled={isSignupDisabled}>
                                                Sign Up
                                            </button>
                                        </button> : <button type="submit" className="btn submitbtn w-100" data-toggle="modal" data-target="#exampleModalCenter">
                                            Sign Up
                                        </button>
                                            }
                                    </div>

                                    <div className="text-center">
                                        <Link to='/signin'>I Already Have an Account</Link>
                                    </div>

                                </form>
                            </div>
                                <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header" id="modal">
                                            Registration Page
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                            <div className="modal-body">
                                            <div className="container height-100 d-flex justify-content-center align-items-center">
                                                <div className="position-relative">
                                                    <div className="card p-2 text-center">
                                                        <h6>Please enter the one time password <br /> to verify your account</h6>
                                                        <div> <span>A code has been sent to</span> <small>Your Email Id</small> </div>
                                                        <div id="otp" className="inputs d-flex flex-row justify-content-center mt-2">
                                                            <input ref={otp} className="m-2 text-center form-control rounded width:10" type="text" id="fourth" maxlength="4" />
                                                        </div>
                                                        <div className="mt-4">
                                                            {modal ? <button onClick={() => registration(mtime, pappu)} className="btn btn-warning px-4 validate" id="verify" data-dismiss="modal">Validate</button> :  <button onClick={() => registration(mtime, pappu)} className="btn btn-warning px-4 validate" id="verify">Validate</button>}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </>
}
export default SignUp;
