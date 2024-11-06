import { ToastContainer, toast } from "react-toastify";
import { signout } from "../../../router-config/userSlice";
import { useDispatch } from "react-redux";

function SideBar() {
    const dispatch = useDispatch();
    const signOut=()=>{
         dispatch(signout())
         toast.info("Sign Out SuccesFully");
       }
    return <>
    <ToastContainer/>
        <div className="col-lg-3 col-md-4">
            <div className="myaccount-tab-menu nav" role="tablist">
                <a href="#userBooks" className="active" data-bs-toggle="tab"><i className="fa fa-dashboard"></i>
                    Your Books</a>
                <a href="#orders" data-bs-toggle="tab"><i className="fa fa-cart-arrow-down"></i>
                    Orders</a>

                <a href="#payment-method" data-bs-toggle="tab"><i className="fa fa-credit-card"></i>
                    Payment
                    Method</a>
                <a href="#address-edit" data-bs-toggle="tab"><i className="fa fa-map-marker"></i>
                    address</a>
                <a href="#account-info" data-bs-toggle="tab"><i className="fa fa-user"></i> Account
                    Details</a>
                <a onClick={signOut}><i className="fa fa-sign-out"></i>SignOut</a>
            </div>
        </div>
    </>
}

export default SideBar;