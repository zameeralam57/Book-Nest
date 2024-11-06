import { useSelector } from "react-redux";
import { apiEndPoint } from "../../../webApi/webapi";
import axios from "../../../interceptor.js";
import { useEffect, useState } from "react";

function BillingAdress() {
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
        <div className="tab-pane fade" id="address-edit" role="tabpanel">
            <div className="myaccount-content">
                <h5>Billing Address</h5>
                <address>
                    <p><strong>{currentUser && currentUser.name}</strong></p>
                    <p>{orderList[orderList.length - 1]?.delieveryAddress}</p>
                    <p>Mobile: {currentUser?.contact}</p>
                </address>

            </div>
        </div>

    </>
}

export default BillingAdress;