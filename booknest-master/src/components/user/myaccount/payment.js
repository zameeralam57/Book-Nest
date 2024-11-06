import { useNavigate } from "react-router-dom";
import { apiEndPoint } from "../../../webApi/webapi";
import axios from "../../../interceptor.js";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Payment() {
    const { currentUser } = useSelector((state) => state.user)
    const [orderList, SetOrderList] = useState([]);
   
    const featchOrderByUserId = async () => {
        let response = await axios.post(apiEndPoint.FETCH_ORDER, { userId: currentUser._id });
           SetOrderList(response.data.orderlist);
    }


    useEffect(() => {
        featchOrderByUserId();
    }, []);

    return <>
        <div className="tab-pane fade" id="payment-method" role="tabpanel">
            <div className="myaccount-content">
                <h5>Payment Method</h5>
                {orderList.length==0?<p className="saved-message">You Can't Saved Your Payment Method yet.</p>:<p className="saved-message">Your Last Payment Method yet {orderList[orderList.length-1].paymentMode}.</p>}
               
            </div>
        </div>
    </>
}

export default Payment;