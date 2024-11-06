import SideBar from "./sidebar";
import './myaccount.css'
import { useState } from "react";
import axios from "../../../interceptor.js";
import { apiEndPoint } from "../../../webApi/webapi";
import { useDispatch, useSelector } from "react-redux";
import { setUpdateProfile } from "../../../router-config/userSlice";
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, toast } from "react-toastify";
import Footer from "../../footer/footer";
import Header from "../../header/header";
function Update() {
    const { currentUser } = useSelector((state) => state.user)
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [name, SetName] = useState("");
    const [email, SetEmail] = useState("");
    const [contact, SetContact] = useState("");
    let photo=null;
    const updateProfile = async (event) => {
        event.preventDefault();
        try {
            const formData = new FormData();
            formData.append("profile",photo);
            formData.set("name",name);
            formData.set("email",email);
            formData.set("contact",contact);
            formData.set("_id",currentUser?._id);
            let response = await axios.post(apiEndPoint.USER_UPDATEPROFILE,formData);
            dispatch(setUpdateProfile(response.data.updatedUser));
            toast.success("Profile Updated Succesfully");
            setTimeout(()=>{
                navigate('/myaccount')
            },5000);
        } catch (err) {
            toast.error("Something Went Wrong");
        }
    }

    const getImage = (event)=>{
        photo = event.target.files[0];
    }


    return <>
        <Header />
        <div className="breadcrumbs-area mb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="breadcrumbs-menu">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#" className="active">Update Profile</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="my-account-wrapper mb-70">
            <ToastContainer />
            <div className="container">
                <div className="section-bg-color">
                    <div className="row">
                        <div className="col-lg-12">

                            <div className="myaccount-page-wrapper">

                                <div className="row ">
                                    <div className="col-lg-3"></div>

                                    <div className="col-lg-8 col-md-8">

                                        <div className="tab-content" id="myaccountContent">
                                            <div className="updateaccount">
                                                <h5 className="text-center text-uppercase cardtitle p-4 ">Update Profile</h5>

                                                <div className="row">

                                                    <form onSubmit={updateProfile}>
                                                        <div className="col-lg-10 m-auto mt-2">
                                                            <div className="row form-group">
                                                                <input onChange={(event) => SetName(event.target.value)}  defaultValue={currentUser?.name} className="form-control" />
                                                            </div>
                                                            <div className="row form-group">
                                                                <input onChange={(event) => SetEmail(event.target.value)} defaultValue={currentUser?.email} className="form-control" />
                                                            </div>
                                                            <div className="row form-group">
                                                                <input onChange={(event) => SetContact(event.target.value)} defaultValue={currentUser?.contact} className="form-control" />
                                                            </div>
                                                            <div className="row form-group">
                                                                <input onChange={getImage} type="file"  defaultValue={currentUser?.photos} className="form-control" />
                                                            </div>
                                                            <div className="row form-group">
                                                                <button className="editbutton " type="submit"><i className="fa fa-edit"></i>
                                                                    update</button>
                                                            </div>
                                                        </div>
                                                    </form>
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
        <Footer />
    </>
}

export default Update;