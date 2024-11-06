import { useSelector } from "react-redux";
import"./myaccount.css"
import{Link, useNavigate} from "react-router-dom"

import Payment from "./payment";
import BillingAdress from "./billing";
import Account from "./account";
import SideBar from "./sidebar";
import UserBooks from "./userbook";
import Order from "./order/order";
import Header from "../../header/header";
import Footer from "../../footer/footer";
function MyAccount(){
  
    return<>
    <Header/>
    
    <div className="entry-header-area mt-3">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="entry-header-title">
                        <h2>My-Account</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
  
    <div className="my-account-wrapper ">
        <div className="container">
            <div className="section-bg-color">
                <div className="row">
                    <div className="col-lg-12">
                      
                        <div className="myaccount-page-wrapper">
                         
                            <div className="row">
                               <SideBar/>
                              
                                <div className="col-lg-9 col-md-8 mb-4" style={{marginTop:'-70px'}}>
                                    <div className="tab-content" id="myaccountContent">
                                       
                                        <UserBooks/>
                                         <Order/>
                                         <Payment/>
                                       <BillingAdress/>
                                       <Account/>   
                                    </div>
                                </div>
                              
                            </div>
                        </div>
                      
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
    </>
}

export default MyAccount;