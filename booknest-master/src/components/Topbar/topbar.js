import { Link, useNavigate } from 'react-router-dom';
import './topbar.css'
import { useSelector } from 'react-redux';
import recentProduct from '../../router-config/recentProductSlice';
import axios from '../../interceptor.js';
import { apiEndPoint } from '../../webApi/webapi';
import { useRef } from 'react';
function TopBar() {
    const { recentProductList, error } = useSelector(state => state.recentProduct);
    const { currentUser } = useSelector((state) => state.user);
    const {cartItems} = useSelector((state)=>state.cart);
    const keyword = useRef("");
    const navigate = useNavigate();
    function debounce(func, timeout = 1000) {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => { func.apply(this, args); }, timeout);
        };
    }
    const getSearch = async (event) => {
        const response = await axios.post(apiEndPoint.SEARCH_BOOKS, { keyword: keyword.current.value });
        navigate("/book", { state: { books: response.data.Product, status: true } });
    }
    const processChange = debounce((event) => getSearch(event));

    return <>
     
        <div className="header-mid-area pt-40">
            <div className="container">
                <div className="row">

                    <div className="col-lg-4 col-md-4 col-12  " style={{marginTop:"-30px"}}>
                        <div className="logo-area text-left   logo-xs-mrg ">
                            <Link to={"/"}><img src="img/logo/logo.png" alt="logo" className=' logoimg mb-3 pb-3 '/></Link>
                            <Link to={"/"} className='topbarlogoheading ' >BookNest</Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12 " >
                        <div className="header-search ms-3 mb-3 ">
                            <form action="#">
                                <input type="text" ref={keyword} onKeyUp={processChange} placeholder="Search entire store here..." />
                                <a href="#"><i className="fa fa-search"></i></a>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-9 pe-5 ">
                        <div className="my-cart">
                            <ul>
                                <li> <Link className="view-cart" to="/cart" ><i className="fa fa-shopping-cart"></i>My Cart</Link>
                                    {currentUser?.status?<span>{cartItems?.length}</span > : <span>0</span >}
                                    <div className="mini-cart-sub">
                                        <div className="cart-product">
                                        {!error && recentProductList.map((product, index)=>
                                            <div className="single-cart">
                                                <div className="cart-img">
                                                    <a href="#"><img src="img/product/3.jpg" alt="book" /></a>
                                                </div>
                                                <div className="cart-info">
                                                    <h5><a href="#">Your cart books</a></h5>
                                                    <p>1 x ₹52.00</p>
                                                </div>
                                                <div className="cart-icon">
                                                    <a href="#"><i className="fa fa-remove"></i></a>
                                                </div>
                                            </div>)}
                                        </div>
                                        <div className="cart-totals">
                                            <h5>Total <span> ₹12.00</span></h5>
                                        </div>
                                        <div className="cart-bottom">
                                        <Link className="view-cart" to="/cart" >view cart</Link>
                                                <Link  to="/checkout">Check Out </Link>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>


                    </div>
                    <div className='col-md-1 col-lg-1 col-sm-1 col-1 '>

                        <div className='d-flex justify-content-end' >
                            <div className=' ml-4 me-3 ms-3'  >
                                <Link to='/myaccount'><i className="fa fa-user logosymbol"></i></Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    </>
}

export default TopBar;