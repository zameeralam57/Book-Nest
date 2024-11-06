import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { apiEndPoint } from '../../../../webApi/webapi';
import Footer from '../../../footer/footer';
import Header from '../../../header/header';
import'./order.css'
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from '../../../../interceptor.js';
function OrderDetails(){
    const{currentUser}=useSelector((state)=>state.user)
    const[orderList,SetOrderDetailsList]=useState([]);
    const location = useLocation();
    const order =location?.state?.order
   
    const featchOrderByUserId=async(id)=>{

        let response = await axios.post(apiEndPoint.FETCH_ORDER_BY_ORDERID,{id:order._id});
        SetOrderDetailsList(response.data.order);
    }
    useEffect(() => {
        featchOrderByUserId();
    }, []);
   return<>
      <Header/>
      <div className="container orderDetailsContainer">
        <div>
        <div className='row'>
        
                 <div className='col-md-10 orderDetaildiv m-auto mt-3'>
                 <div className='row  d-flex justify-content-end me-1 '>
                 <div className='orderId mt-2 text-white'>
                 <span> OrderId :{orderList._id}</span>
                 </div>
                 </div>
                 <div className=' row mt-2 mb-2'>
                    <div className='col-md-5'>
                    <h6 className="contentcart"><span className="carttitle">Date :</span> {orderList.date}</h6>
                   </div>
                   <div className='col-md-5'>
                   <h6 className="contentcart"><span className="carttitle">Contact Person :</span>{orderList.contactPerson}</h6>
                   </div>     
                 </div>
                 <div className=' row mt-2 mb-2'>
                    <div className='col-md-5'>
                    <h6 className="contentcart"><span className="carttitle">contact Number :</span>{orderList.contactNumber}</h6>
                   </div>
                   <div className='col-md-5'>
                   <h6 className="contentcart"><span className="carttitle">Delievery Address :</span>{orderList.delieveryAddress}</h6>
                   </div>     
                 </div>
               
                <hr/>
                {orderList?.orderItem?.map((book)=>
                <div className='row p-0 '>
                  <div className='col-md-2 mb-1'>
                  {book?.bookId?.photos.split("@")[1] ? <img src={apiEndPoint.DISK_STORAGE+ book?.bookId?.photos.split("@")[1]} className="img-fluid" width='90px' height='60px' alt={book?.bookId?.name}  /> : <img src={"https://drive.google.com/uc?export=view&id=" + book?.bookId?.photos.substring(32, book?.bookId?.photos.lastIndexOf("/"))} className="img-fluid" width='90px' height='60px' alt={book?.bookId?.name} />}
                  </div>
                 <div className='col-md-4 mt-3'>
                    <h6 className="contentcart"><span className="carttitle">Title  : </span>{book?.bookId?.name}</h6>
                    <h6 className="contentcart"><span className="carttitle">Author : </span>{book?.bookId?.author}</h6>
                    <h6 className="contentcart"><span className="carttitle">Price  : </span>₹ {book?.bookId?.price}</h6> 
                 </div>
                  <div className='col-md-3 mt-3'>
                  <h6 className="contentcart"><span className="carttitle">Status : </span>{order?.status.toUpperCase()}</h6>
                  </div>
                  <div className='col-md-3 mt-3'>
                  </div>
                  <hr/>
                </div>)}
                </div>
        </div>
        </div>

      </div>

   </>
}

export default OrderDetails;