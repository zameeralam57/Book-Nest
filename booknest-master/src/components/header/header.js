import { useDispatch, useSelector } from "react-redux";
// useDispatch: A hook that allows you to dispatch actions to the Redux store. In this case, it is used to trigger the signout action.
// useSelector: This hook retrieves state from the Redux store. It selects a piece of state (e.g., categoryList and currentUser) and passes it to the component.

import { Link, useNavigate } from "react-router-dom";
// Link: A React Router component that renders a link. Instead of reloading the page, it allows for client-side routing, ensuring faster navigation.
// useNavigate: A hook that allows programmatic navigation. For example, it is used to navigate to the "/book" page when searchCategory is called.

import TopBar from "../Topbar/topbar";
// A custom component that renders the top bar of the website. It contains the logo, search bar, and user account options.

import { signout } from "../../router-config/userSlice";
// An action imported from a slice file (userSlice). Redux slices typically contain state logic, reducers, and actions related to specific pieces of state.

import { toast } from "react-toastify";
// A notification library that is used to display user-friendly toast messages. In your case, it's used to show a message when the user signs out: "Sign Out Successfully".

import { useState } from "react";
// A React hook to manage local component state. In this component, isLoading is defined with useState to keep track of the loading state.





function Header() {
    const dispatch = useDispatch();
    // dispatch: This holds the result of useDispatch() which is used to dispatch the signout action.

    const navigate = useNavigate();
    // navigate: The result of useNavigate(), used for programmatic navigation within the app.

    const [isLoading,setIsLoading] = useState(true);
    // isLoading: A state variable to manage the loading state.

    const { categoryList, error} = useSelector((state) => state.category)
    // Extracted from the Redux store (state.category). categoryList stores a list of book categories, and error checks if there's an issue fetching categories.

    const currentUser = useSelector((state) => state.user.currentUser);
    // currentUser: Extracted from state.user, used to check if a user is logged in.





    // This function dispatches the signout action to log the user out and then uses toast.info() to show a notification of the sign-out.
    const signOut = () => {
        dispatch(signout())
        toast.info("Sign Out SuccesFully");
    }

    // This function navigates the user to the /book page when triggered. It is attached to category links.
    function searchCategory() {
        navigate("/book")
    }





    return <>
        <header>
            <TopBar />
            {/* Rendered for larger screens (d-lg-block). */}
            <div className="main-menu-area d-md-none d-none d-lg-block sticky-header-1" id="header-sticky">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="menu-area">
                                <nav>
                                    <ul>
                                        <li className="active"><Link to='/'>Home</Link>

                                        </li>
                                        <li><Link to='/book'>Book</Link></li>
                                        <li><a className="text-white" style={{cursor:"pointer"}}>Categories<i className="fa fa-angle-down"></i></a>

                                            <div className="mega-menu">
                                                {!error && categoryList.map((category, index) =>
                                                    <span key={index}>
                                                        <a style={{ cursor: "pointer" }} onClick={searchCategory}>{category.categoryName}</a>
                                                    </span>
                                                )}


                                            </div>
                                        </li>

                                        <li><Link >Upload Books<i className="fa fa-angle-down"></i></Link>
                                        
                                        <div className="sub-menu sub-menu-2">
                                            <ul> 
                                                 <li><Link to='/donate'>Donate Books</Link></li>
                                                    <li><Link to='/sellbooks'>Sell Books</Link></li>
                                            </ul>
                                        </div>
                                    </li>

                                      
                                        <li><Link to='/freebooks'>Free Books</Link> </li>

                                        <li><Link >Pages<i className="fa fa-angle-down"></i></Link>
                                        
                                            <div className="sub-menu sub-menu-2">
                                                <ul>
                                                      <li><Link to='/aboutUs'>About Us</Link></li>
                                                    <li><Link to='/contact'>Contact Us</Link></li>
                                                </ul>
                                            </div>
                                        </li>

                                        {currentUser ? <li><Link onClick={signOut}>SignOut</Link></li> : <li><a href="#">MyAccount<i className="fa fa-angle-down"></i></a>
                                            <div className="sub-menu sub-menu-2">
                                                <ul>
                                                    <li><Link to='/signup'>Sign Up</Link></li>

                                                    <li><Link to='/signin'>Sign In</Link></li>
                                                </ul>
                                            </div>
                                        </li>}
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Rendered for smaller screens (d-lg-none). */}
            <div className="mobile-menu-area d-lg-none d-block fix">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="mobile-menu">
                                <nav id="mobile-menu-active">
                                    <ul id="nav">
                                        <li>
                                            <Link to="/"> Home</Link>
                                        </li>
                                        <li><Link to="/book">Book</Link>

                                        </li>
                                        <li><a href="product-details.html">Categories</a>
                                            <ul>
                                                {!error && categoryList.map((category, index) =>
                                                    <li key={index} >
                                                        <span onClick={searchCategory} >{category.categoryName} </span>
                                                    </li>
                                                )}
                                            </ul>
                                        </li>
                                        <li><Link to="/donate">
                                            Donate Books
                                        </Link>
                                        </li>
                                        <li><Link to='/freebooks'>Free Books</Link>
                                        </li>
                                        <li><Link to='/sellbooks'>Sell Books</Link></li>
                                        <li>Page
                                            <ul>
                                                <li><Link to='/signup'>SignUp</Link></li>
                                                <li><Link to='/signin'>SignIn</Link></li>
                                            </ul>
                                        </li>


                                    </ul>

                                </nav>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </header>
    </>
}

export default Header;