import { Link } from "react-router-dom";

function Footer() {
    return <div>
        <footer>

            <div className="footer-top ">
                <div className="container ">
                    <div className="row ">
                        <div className="col-lg-12 ">
                            <div className="footer-top-menu bb-2 ">
                                <nav>
                                    <ul>
                                        <li><Link to='/'>HOME</Link></li>
                                        <li><a href="# ">contact us</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-mid ptb-50 ">
                <div className="container ">
                    <div className="row ">
                        <div className="col-lg-8 col-md-12 ">
                            <div className="row ">
                                <div className="col-lg-4 col-md-4 col-12 ">
                                    <div className="single-footer br-2 xs-mb ">
                                        <div className="footer-title mb-20 ">
                                            <h3>BookNest</h3>
                                        </div>
                                        <div className="footer-mid-menu ">
                                            <ul>
                                                <li><Link to="/aboutUs">About us</Link></li>
                                                <li><Link to={"https://www.infobeans.com/about/infobeans-foundation/"}>Our Mentor</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-12 ">
                                    <div className="single-footer br-2 xs-mb ">
                                        <div className="footer-title mb-20 ">
                                            <h3>Our company</h3>
                                        </div>
                                        <div className="footer-mid-menu ">
                                            <ul>
                                                {/* <li><Link  to="/donetors">Donetors</Link></li> */}
                                                <li><Link to="/signin"> Login</Link></li>
                                                <li> <Link to="/myaccount">My Account</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-12 ">
                                    <div className="single-footer br-2 xs-mb ">
                                        <div className="footer-title mb-20 ">
                                            <h3>Your account</h3>
                                        </div>
                                        <div className="footer-mid-menu ">
                                            <ul>
                                                <li><Link to={"/myaccount"}>Addresses</Link></li>
                                                <li><Link to={"/myaccount"}> Orders</Link></li>
                                                <li><Link to={"/myaccount"}>Personal info</Link></li>
                                                <li><Link to={"/donetors"}>Donetors</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 ">
                            <div className="single-footer mrg-sm ">
                                <div className="footer-title mb-20 ">
                                    <h3>BookNest Foundation</h3>
                                </div>
                                <div className="footer-contact ">
                                    <p className="adress "><span>Our Company</span> BookNest Foundation</p>
                                    <p><span>Call us now:</span> 9504860538</p>
                                    <p><span>Email:</span>pappukumarme9999@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom ">
                <div className="container ">
                    <div className="row bt-2 ">
                        <div className="col-lg-6 col-md-6 col-12 ">
                            <div className="copy-right-area ">
                                <p>&copy; 2023 <strong> BookNest </strong> Mede by <a href="/" target="_blank "><strong>BookNest Developers</strong></a></p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    </div>

}

export default Footer;