import axios from "../../../../interceptor.js";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import "./order.css"
import { apiEndPoint } from "../../../../webApi/webapi";
import { useNavigate } from "react-router-dom";
import NoOrders from "../notUpload/NoOrder";



function Order() {

  const { currentUser } = useSelector((state) => state.user)
  const [orderList, SetOrderList] = useState([]);
  const navigate = useNavigate();
  const featchOrderByUserId = async () => {
    let response = await axios.post(apiEndPoint.FETCH_ORDER, { userId: currentUser._id });
    // (response.data.orderList);
    SetOrderList(response.data.orderlist);
  }

  const changeOrderDetails = (order) => {
    navigate("/orderDetails", { state: { order: order } })
  }


  useEffect(() => {
    featchOrderByUserId();
  }, []);
  return <>
    <div className="tab-pane fade" id="orders" role="tabpanel">
      <div className="myaccount-content">
        <h5>Orders</h5>
        <div className="myaccount-table table-responsive text-center">
          {!orderList.length == 0 ? <table className="table align-middle mb-0 bg-white tableorder" >
            <thead >
              <tr className="text-white">
                <th>S.No</th>
                <th>OrderId</th>
                <th>Date</th>
                <th>Status</th>
                <th>PaymentMode</th>
                <th>Bill Amount</th>
              </tr>
            </thead>
            <tbody>
              {orderList.sort((b,a)=>b.date<a.date?1:-1).map((order, index) => <tr key={index}>
                <td>
                  {index + 1}
                </td>
                <td className="text-primary" style={{ cursor: "pointer" }} onClick={() => changeOrderDetails(order)}>
                  {order._id}
                </td>
                <td>
                    {order.date}
                </td>
                <td>
                  {order.status == 'shipped' ? <span className="badge badge-success rounded-pill d-inline">
                    {order.status}
                  </span> : <span class="badge badge-primary rounded-pill d-inline">{order.status}</span>}

                </td>
                {order.paymentMode * 1 ? <td>Online Payment</td> : <td>COD</td>}
                <td>Rs. {order.billamount}</td>
              </tr>)}


            </tbody>
          </table>
            : <NoOrders />}

        </div>
      </div>
    </div>

  </>
}

export default Order;