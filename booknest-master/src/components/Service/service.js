import { ToastContainer } from "react-toastify";
import { Externals } from "../../Externals/BestAuthore";
import { Offers } from "../../Externals/Offers";

function Service(){
    <ToastContainer/>
    return <>
     <div className="banner-area banner-res-large pt-30 pb-5">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div className="single-banner mb-30">
                        <div className="banner-img">
                            <a href="#"><img src="img/banner/1.png" alt="banner" /></a>
                        </div>
                        <div className="banner-text">
                            <h4>5-10% OFF shipping item</h4>
                            <p>{Offers.OFF}</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div className="single-banner mb-30">
                        <div className="banner-img">
                            <a href="#"><img src="img/banner/2.png" alt="banner" /></a>
                        </div>
                        <div className="banner-text">
                            <h4>Money back guarantee</h4>
                            <p>{Offers.GUARENTEE}</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div className="single-banner mb-30">
                        <div className="banner-img">
                            <a href="#"><img src="img/banner/3.png" alt="banner" /></a>
                        </div>
                        <div className="banner-text">
                            <h4>Cash on delivery</h4>
                            <p>{Offers.COD}</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div className="single-banner mb-30">
                        <div className="banner-img">
                            <a href="#"><img src="img/banner/4.png" alt="banner" /></a>
                        </div>
                        <div className="banner-text">
                            <h4>Help & Support</h4>
                            <p>{Offers.SUPPORT}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    </>
}

export default Service;