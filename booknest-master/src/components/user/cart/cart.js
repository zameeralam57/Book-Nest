import Footer from "../../footer/footer";
import Header from "../../header/header";
import "./cart.css";
import axios from "../../../interceptor.js";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { addItemInToCart, removeFromCart, setCartItems } from "../../../router-config/CartSlice";
import { apiEndPoint } from "../../../webApi/webapi";
import { toast, ToastContainer } from "react-toastify";
import EmptyCart from "./emptycart";
import Payment from "../../ExtraServices/razorpay";
import Invoice from "../../../Externals/easyInvoice";

function Cart() {
  const [productList, setProductList] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { currentUser } = useSelector(state => state.user);
  const { cartItems, flag } = useSelector(state => state.cart);
  const [paymentMode, setPaymentMode] = useState(false);
  const [contactPerson, setContactPerson] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [delieveryAddress, setDeliveryAddress] = useState("");

  const location = useLocation();
  const dispatch = useDispatch();
  var amount = 0;
  var total = 0;
  var status = false;
  const book = location?.state?.Buybook;
  if(book?.Buyflag)
    status = book.Buyflag;
  cartItems?.map((carts,index)=>{
      total+= carts.bookId.price*1+30;

  })
  
  const loadProducts = async () => {
    try {

      let response = await axios.post(apiEndPoint.FETCH_CART, { userId: currentUser._id });
      if(status)
          dispatch(setCartItems(book.Buybook));
      else
         dispatch(setCartItems(response.data.cart));
    }
    catch (err) {
      setError("Oops! something went wrong..");
    }
  }
  const loadOrder = async (event) => {
    try {

      event.preventDefault();
      const date = new Date().toString().substring(4, 15).replaceAll(' ', '-');
      let response = await axios.post(apiEndPoint.ORDER_SAVE, { userId: currentUser._id, billamount: total, contactPerson, contactNumber, delieveryAddress, paymentMode, cartId: cartItems[0]._id, orderItem: cartItems, date:date});
      const orederPerson = {name : currentUser.name,address : delieveryAddress+'-'+contactPerson+' '+contactNumber,date,orderId : response.data.orderId};
      const userData = {name : currentUser.name,address:delieveryAddress,date,orderId:response._id};
      if(response.data.status)
        {
          // <Invoice data = {orederPerson} books = {cartItems}/>
          const response = await axios.post(apiEndPoint.USER_SIGNIN,{user:userData,books:cartItems});
          toast.success("Order placed success");
          setTimeout(()=>{
          },3000);
        }
      else
          toast.warning("Oops something went wrong");
    } catch (err) {
    }
  }


  const removeCart = async (id) => {

    try {
      if (window.confirm("Do You Want To Remove")) {
        dispatch(removeFromCart({ userId: currentUser._id, _id: id }));
      }
    } catch (err) {
      toast.error("Something Went Wrong");
    }
  }

  useEffect(() => {
    loadProducts();
  }, []);


  return <>
    <Header />
    <ToastContainer/>
    <div className="breadcrumbs-area ">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumbs-menu">
              <ul>
                <li><Link to='/'>Home</Link></li>
                <li><a href="#" className="active">cart</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div className="modal fade" id="checkoutModel" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{
      border: "2px solid black"
    }}>
      <div className="modal-dialog" role="document">
        <form onSubmit={loadOrder}>
          <div className="modal-content">
            <div className="modal-header ">
              <h5 className="modal-title orderSummary " id="exampleModalLabel">Shipping Address</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body p-0">
              <div className="innermodel mt-2">
                <div className="form-group ">
                  <input type="text" placeholder="Enter Contact Person Name" onChange={(event) => setContactPerson(event.target.value)} className="form-control " />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Enter Contact Number" onChange={(event) => setContactNumber(event.target.value)} className="form-control" />
                </div>
                <div className="form-group">
                  <textarea type='text' cols='64' rows='4' placeholder="Enter Delievery Address" onChange={(event) => setDeliveryAddress(event.target.value)} className="form-control" />
                </div>
                </div>
                {paymentMode*1?<Payment
                    money = {total}/>:<></>
              }
            </div>
            <div className="modal-footer ">
              <button type="submit" className="btn-block cartcheckoutbutton ">Placed Order</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    {!cartItems?.length == 0 ? <div className="container-fluid addtocartcontainer mb-70">
      <div className=" row">
        <div className="  ml-4 mt-5 col-sm-8 col-md-8 col-xm-8 ps-2 ">
          <div className=" headingcart row col-md-12 mt-2">
            {book?.Buyflag ? <h5 className="cartscontainheading text-white mt-1">Your Book(1)</h5>:<h5 className="cartscontainheading text-white mt-1">My Cart({cartItems?.length + "Books"})</h5>}
          </div>
          {!flag && cartItems?.map((product, index) =>
            <div className="addtocartdiv row mt-3 ">
              <div className="col-md-2 col-sm-4 ">
                <img src={"https://drive.google.com/uc?export=view&id=" + product.bookId.photos?.substring(32, product.bookId.photos.lastIndexOf("/"))} className="imgcart mt-2 img img-fluid img-responsive img-thumbnail" alt="" />
              </div>
              <div className="col-md-7 mt-2 ">
                <h6 className="mt-2 cartscontainheading">{product.bookId.name}</h6>
                <h6 className="contentcart"><span className="carttitle">Author : </span>{product.bookId.author}</h6>
                <h6 className="contentcart"><span className="carttitle">Price : </span>{product.bookId.price} Rs</h6>
                <h6 className="carttitle">Shipping & Handling charges   ₹30</h6>
              </div>

              <div className="col-md-3 text-center">
                <button className="cartbutton" onClick={() => { removeCart(product._id) }}>Remove</button>
              </div>

            </div>)}


        </div>

        <div className="col-md-3 col-xm-3 col-sm-3  addtocartdivafter ml-5 mt-5 ">
          <div className="mt-2 orderSummary">
            Order Summary
          </div><hr />
          <div className="cartscontainheading  mt-4">
            {!flag && cartItems?.map((product, index) => { amount = amount + product.bookId.price * 1 })}
            <h6 className="contentcart">Pay Only for Shipping  <span className="ml-1"> :₹{!flag && cartItems?.length * 30} ({!flag && cartItems?.length} Books)</span></h6>
            <h6 className="contentcart">Bill Amount<span className="ml-5 pl-3"> :  ₹ {amount}</span></h6>
            <h6 className="contentcart">Total Amount<span className="ml-5 pl-3">: ₹ {total = amount + (!flag && cartItems?.length * 30)}</span></h6><hr />
            <div onChange={(event) => setPaymentMode(event.target.value)}>
              <input type="radio" value={0} name='payment' /><span className="contentcart" style={{cursor:"pointer"}}>  Cash On Delievery</span><br />
              <input type="radio" value={1} name='payment' /><span className="contentcart"  style={{cursor:"pointer"}}> Online Payment</span></div>
          </div>
          <a className="btn-block cartcheckoutbutton text-center mt-3 " data-toggle="modal" data-target="#checkoutModel">Procced To checkout</a>
        </div>
      </div>
    </div> : <EmptyCart />}
    <Footer />

  </>
}

export default Cart;
