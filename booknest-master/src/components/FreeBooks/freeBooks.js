import { apiEndPoint } from "../../webApi/webapi";
import Header from "../header/header";
import Footer from "../footer/footer";
import'./freebooks.css'

import axios from "../../interceptor.js";
// Axios is a promise-based HTTP client used for making requests to the backend. Here, it's used to fetch free books data and to send requests for adding books to the cart.

import { useEffect, useState } from "react";
// useEffect: A React hook that handles side-effects, such as fetching data after the component mounts.
// useState: Manages local state in React components. Various state variables (e.g., freeProduct, freeerror) are used to handle the component's dynamic content and user interactions.

import { useNavigate } from "react-router";
// This hook allows for programmatic navigation to other routes. It is used to navigate to the description page of a book or to the cart page.

import { useSelector } from "react-redux";
// This hook is used to retrieve the current user from the global Redux store. It checks if a user is logged in, which is necessary for features like "Buy Now" and adding items to the cart.

import { ToastContainer, toast } from "react-toastify";
// toast: A notification library for user feedback. It's used to display success or error messages when adding books to the cart or if a user is not logged in.
// ToastContainer: A container component that displays the toast notifications.





function FreeBooks() {
  
  // An array that stores the list of free books fetched from the backend. Initially, it's an empty array, and it's populated after the loadFreeProduct function is called.
  const [freeProduct, SetFreeProduct] = useState([]);
  
  // Used to store any errors that occur during the fetch process. If the books cannot be loaded (e.g., network issues), this state variable stores the error message.
  const [freeerror, setFreeError] = useState(null)
  
  // Extracts the current user from the global Redux store. It's used to check if a user is logged in before adding books to the cart or buying them.
  const {currentUser} = useSelector((state)=>state.user);
  
  // This is used to navigate to the description page of a book or to the cart page
  const navigate = useNavigate();




  // Purpose: Fetches the list of free books from the backend. The function makes a GET request to the FREE_BOOK_API endpoint using axios. If the response is successful, it populates the freeProduct array with the list of books (response.data.bookList). If an error occurs (e.g., failed request), freeerror is set to display a message 
  const loadFreeProduct = async () => {
    try {
      let response = await axios.get(apiEndPoint.FREE_BOOK_API);
      if (response.data.status) {
        SetFreeProduct(response.data.bookList)
      }
    } catch (err) {
      setFreeError("oops Something Went Wrong");
    }
  }



  // This function navigates the user to the description page of the selected book. it navigates to the /viewDescription page and passes the selected book's details as state, so the description page can display them.
  const viewDescription = (book) => {
    navigate("/viewDescription", { state: { bookDetails: book } })
  }



//   Purpose: Allows users to directly add a book to their cart and proceed to the cart page.
const BuyNow=async(book,flag)=>{
  const buy={
    Buybook:[{bookId:book}],
    Buyflag:true
  }
  
  try{
    if(currentUser){
      // If the user is logged in (currentUser exists), the function navigates to the cart page, passing the selected book's ID in the state. 
      navigate("/cart",{state:{Buybook:buy}})
      
      
    }else{
      // If the user is not logged in, a toast notification (toast.warning) is triggered, warning the user that they need to log in first.
      toast.warning("You Have To Login First ")
    }
    
  }catch(err){
       // Catches any server issues, and displays a toast message indicating the error.
      if(err.response.status==500)
      toast.error("Oops Something Went Wrong");
     }
  }

  const addToCart = async (id) => {       // Adds the selected book to the user’s shopping cart.
    try {
        if (currentUser) {
          // If the user is logged in, a POST request is made to the ADD_TO_CART API endpoint, passing the book ID and user ID as payload.
            let response = await axios.post(apiEndPoint.ADD_TO_CART, { bookId: id, userId: currentUser._id });
            toast.success("Book is added to you'r cart");
        }
        else {
            toast.warning("You have to Login first");
        }
    }
    // If the book is already in the cart (400 error) or if there's a server error (500), appropriate messages are displayed using toast notifications.
    catch (err) {
        if (err.response.status == 400)
            toast.warning("Book is already exists in cart");
        if (err.response.status == 500)
            toast.error("Oops Something went wrong");
    }
}


// Purpose: The useEffect hook is triggered when the component is first rendered (empty dependency array []). It calls the loadFreeProduct function to fetch the free books from the backend.
// Side Effect: Loads the list of free books from the server when the component mounts.
  useEffect(() => {
    loadFreeProduct()
  }, [])

  return <>
    <Header />
    <ToastContainer/>
    <section className="blog" id="blogid">
      <div className="container heading-design">
        <div className=" row">

        {!freeerror&&freeProduct.filter((book)=>book.permission&&book.status==true).map((book,index)=> 
            <div key={index} className="col-md-3 col-sm-6 mt-5" data-aos="fade-up" data-aos-duration="500">
              <div className="card">
              {book.photos.split("@")[1] ? <img src={apiEndPoint.DISK_STORAGE+ book.photos.split("@")[1]} className="img-fluid cardimg" /> : <img src={"https://drive.google.com/uc?export=view&id=" + book.photos.substring(32, book.photos.lastIndexOf("/"))} className="img-fluid cardimg" />}
                <a className="cardcircle"><i className="fa fa-shopping-cart carticon mt-3" style={{cursor:"pointer"}} onClick={()=>addToCart(book._id)}></i></a>
                <div className="card-body">
                  <p className="card-text cardtitle">{book.name.substring(0, 20)}</p>
                  <p className="cardprice"><span className="cardtitle">Author: </span>{book.author.substring(0, 15)}</p>
                  <b className="card-text cardprice"><span className="cardtitle">Price: </span>₹ Free</b>
                  <br />
                  <button className="btn mt-2 buynowbutton" onClick={()=>BuyNow(book,true)} >Get Now</button><span className="viewcircle ml-2 "  onClick={() => viewDescription(book)}><small className="viewicon p-2 " ><i className="fa fa-eye" /></small></span>
                </div>
              </div>
            </div>)}

        </div>
      </div>
    </section>

    <Footer />
  </>
}

export default FreeBooks;